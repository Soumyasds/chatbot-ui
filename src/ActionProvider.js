// ActionProvider starter code

import axios from "axios";

// import React from "react";

class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    timerAPI = (message, createChatBotMessage, setChatbotMessage) => {
        var results;
        setTimeout(async() => {
            // setLoading(false);
            // setShowProcessMessage(true)
            var config = {
                method: 'post',
                url: process.env.url || `http://127.0.0.1:5000/GCSPOCBot`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: message
            };
            await axios(config)
                .then(function(response) {
                    console.log("Response");
                    console.log(response)
                    let data = response.data;
                    results = data["ChatbotResponse"];
                    console.log(results);

                    const result = createChatBotMessage(results);
                    // const result = this.createChatBotMessage(results);
                    setChatbotMessage(result);
                    // setLoading(false);
                })
                .catch(function(error) {
                    console.log("Error");
                    console.log(error)
                    const result = createChatBotMessage(process.env.default_message || "Sorry, I do not have answer for that yet!");
                    // const result = this.createChatBotMessage(results);
                    setChatbotMessage(result);
                    // setLoading(false);
                    // setError(error);
                });
        }, 2000)
        console.log(results)
        return results;


    }

    messageHandler = (message) => {

        //Backend call with message as a post body payload and response will be curated and sent as BOT response.
        // const responses = this.apiResponse({ "data": message });
        const result = this.createChatBotMessage(process.env.waiting_message || "Please wait while I get you the details ...");
        // const result = this.createChatBotMessage(results);
        this.setChatbotMessage(result);
        this.timerAPI({ "data": message }, this.createChatBotMessage, this.setChatbotMessage);

        // const responses = this.postData("http://localhost:5000/GCSPOCBot", { "data ": message }).then((data) => {
        //     console.log(data); // JSON data parsed by `data.json()` call
        // });
        // console.log(responses);
        // const response = this.createChatBotMessage(results);
        // this.setChatbotMessage(response);
    }

    setChatbotMessage = (message) => {
        this.setState(state => ({...state, messages: [...state.messages, message] }))
    }
}

export default ActionProvider;