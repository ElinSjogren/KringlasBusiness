using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using J34.Model;

namespace J34.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
     
        private static readonly string[] Descriptions = new[]
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
        public ActionResult<IEnumerable<Weather>> Get()
        {
            var weathers = Enumerable
            .Range(1, 5)
            .Select(index => new Weather
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-10, 40),
                Condition = Descriptions[Random.Shared.Next(Descriptions.Length)]
            })
            .ToArray();
            return Ok(weathers);
        }
    }
}
