const {Client, GatewayIntentBits}=require("discord.js");
require("dotenv").config();

const client=new Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message)=>{
    if(message.author.bot) return;
    message.reply({
        content: "bot"
    })
});

client.login(process.env.KEY);