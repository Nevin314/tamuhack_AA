import { GiftedChat } from 'react-native-gifted-chat';
import React, { useState, useEffect } from 'react';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    const userMessage = newMessages[0].text;
    Dialogflow_V2.requestQuery(
      userMessage,
      result => {
        // Handle chatbot response
        const chatbotResponse = result.queryResult.fulfillmentText;
        // Add the chatbot's response to the chat interface
        const botMessage = {
          _id: Math.random().toString(36).substring(7),
          text: chatbotResponse,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
          },
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, [botMessage]));
      },
      error => {
        // Handle errors
      }
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
}
export default ChatScreen;