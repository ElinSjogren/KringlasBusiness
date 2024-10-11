using Microsoft.AspNetCore.SignalR;
using J34.Hubs;
var builder = WebApplication.CreateBuilder(args);

// Lägg till SignalR-tjänsten
builder.Services.AddSignalR();
var app = builder.Build();
// Konfigurera SignalR-endpoint i din backend
app.MapHub<ChatHub>("/chathub");

app.Run();


