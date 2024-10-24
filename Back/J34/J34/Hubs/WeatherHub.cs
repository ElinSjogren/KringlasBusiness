using Microsoft.AspNetCore.SignalR;
using System.Net.Http;


namespace J34.Hubs
{
    public class WeatherHub : Hub
    {
        private static readonly HttpClient httpClient = new HttpClient();
        private bool _isConnected = false;

        public async Task SendWeatherUpdate()
        {
            var response = await httpClient.GetAsync("https://localhost:7053/api/Weather");
            Console.WriteLine(response);
            var weatherData = await response.Content.ReadAsStringAsync();
            await Clients.All.SendAsync("weatherupdate", weatherData);
        }
        public override async Task OnConnectedAsync()
        {
            Console.WriteLine("Client is connected");
            _isConnected = true;
            while (_isConnected)
            {
                var delayTask = Task.Delay(10000);
                try
                {
                    await SendWeatherUpdate();
                }
                catch (HttpRequestException ex)
                {
                    Console.WriteLine($"Error fetching weather data: {ex.Message}");
                }
                await delayTask; 
            }
        }
    }
}
