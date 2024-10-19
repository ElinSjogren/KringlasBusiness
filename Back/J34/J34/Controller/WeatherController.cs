using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using J34.Model;

namespace J34.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
     
        private static readonly string[] Summaries = new[]
        {
            "Kraftigt regn",
            "Frysande regn",
            "Stänkregn ",
            "Duggregn",
            "Solglimtar",
            "Soligt",
            "Övervägande soligt",
            "Tropiskt klimat",
        };

        private readonly ILogger<WeatherController> _logger;

        public WeatherController(ILogger<WeatherController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Weather> Get()
        {
            return Enumerable
                .Range(1, 5)
                .Select(
                    index =>
                        new Weather
                        {
                            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                            TemperatureC = Random.Shared.Next(-10, 40),
                            Condition = Summaries[Random.Shared.Next(Summaries.Length)]
                        }
                )
                .ToArray();
        }
    }
}
