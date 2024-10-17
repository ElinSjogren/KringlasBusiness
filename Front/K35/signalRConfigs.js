import * as signalR from '@microsoft/signalr';
import { useChatStore } from '@/stores/useChatStore';
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

        this.connection.on('ReceiveMessage', (message) => {
            
            console.log(`Message came like this: ${message}`);
            const chatStore = useChatStore();
            chatStore.addMessage(message.SenderId, message.Content, message.Timestamp);
        });
    }

    async sendMessage(senderId, reciverId, message, date) {
        if (this.isConnected) {
            await this.connection.invoke('SendMessage', senderId, reciverId, message, date);
        } else {
            console.error('Not connected to the SignalR hub');
        }
    }
}

export default new SignalRService();
