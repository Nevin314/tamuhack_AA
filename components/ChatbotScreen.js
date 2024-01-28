import { GiftedChat } from 'react-native-gifted-chat';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert, Dimensions } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 120
    },
    logoutButton: {
        backgroundColor: 'blue', 
        padding: 10, 
        borderRadius: 5,
        marginTop: 10, // Add some margin at the top for spacing
    },
    logoutText: {
        color: 'white', 
        fontWeight: 'bold',
    },
    text: {
        color: 'black', 
        fontWeight: 'bold',
        marginBottom: 60,
        fontSize: 40,
        color: '#45586a',
    },
    logo: {
      width: 393,
      height: 150,
      marginTop: Dimensions.get('window').height / 2 - 490,
      marginBottom: 30,
    },
});

export default ChatScreen;