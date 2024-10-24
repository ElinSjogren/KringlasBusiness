import * as signalR from '@microsoft/signalr';
import { useWeatherStore } from '@/stores/useWeatherStore';
class SignalRService {
    constructor() {
        this.weatherconnection = null;
        this.isConnectedW = false;
    }

    async startConnection() {
        this.weatherconnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7053/weatherhub') 
            .configureLogging(signalR.LogLevel.Information)
            .build();

        try {
            await this.weatherconnection.start();
            this.isConnectedW = true;
            console.log('Connected to SignalR weather');
        } catch (error) {
            console.error('Error while starting connection: ', error);
        }

        this.weatherconnection.on('weatherupdate', (weatherData) => {
            
            console.log(`weatherData came like this: ${JSON.stringify(weatherData)}`);
            const weatherStore = useWeatherStore();
            weatherStore.getAllWeathers(JSON.parse(weatherData));
        });
    }

}

export default new SignalRService();