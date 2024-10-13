import * as signalR from '@microsoft/signalr';

class SignalRService {
    constructor() {
        this.connection = null;
        this.isConnected = false;
    }

    async startConnection() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7053/chathub') 
            .configureLogging(signalR.LogLevel.Information)
            .build();

        try {
            await this.connection.start();
            this.isConnected = true;
            console.log('Connected to SignalR');
        } catch (error) {
            console.error('Error while starting connection: ', error);
        }

        this.connection.on('ReceiveMessage', (user, message) => {
            console.log(`Message from ${user}: ${message}`);
        });
    }

    async sendMessage(user, message) {
        if (this.isConnected) {
            await this.connection.invoke('SendMessage', user, message);
        } else {
            console.error('Not connected to the SignalR hub');
        }
    }
}

export default new SignalRService();
