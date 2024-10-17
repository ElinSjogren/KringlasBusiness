using Microsoft.AspNetCore.SignalR;
namespace J34.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string senderId, string reciverId, string messageContent, string date)
        {
            var message = new Message
            {
                SenderId = senderId,
                Content = messageContent,
                Timestamp = DateTime.UtcNow.ToString()
            };
            await Clients.User(reciverId).SendAsync("ReceiveMessage", message);
        }
    }
}
