// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
// import UserAvatar from "./components/UserAvatar/UserAvatar";

const config = {
    initialMessages: [createChatBotMessage(process.env.welcome_message || `Hello There! I am your POC agent, How can I help you today?`)],
    botName: process.env.bot_name || "Gen AI POC BOT",
    customComponents: {
        botAvatar: (props) => < BotAvatar {...props }
        />,
        // userAvatar: (props) => <UserAvatar {...props}/>
    },
    customStyles: {
        botMessageBox: {
            // botBackgroundColor: #a4273,
        },
        chatButton: {
            // backgroundColor: #39788,
        }
    },
    state: {

    }
}

export default config;