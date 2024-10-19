using Microsoft.AspNetCore.SignalR;
namespace J34.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessageToAll(string user, string messageContent, string date)
        {
           
            await Clients.All.SendAsync("ReceiveMessage", user, messageContent, date);
        }
    }
}
