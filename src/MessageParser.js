// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }



    parse(message) {
        console.log(message);
        // console.log(this.state)
        const lowercaseMessage = message.toLowerCase();
        if (lowercaseMessage) {
            this.actionProvider.messageHandler(lowercaseMessage)
        }

    }
}

export default MessageParser;