import { StyleSheet, Text, View, Button, TextInput, Style, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';

function HomeScreen({navigation}) {
    return (
      <View>
        <Text> Home Sasdfcreen </Text>
        <Button onPress = {() => navigation.navigate('Details')} title='go to details'/>
        <Button onPress = {() => navigation.navigate('Map')} title='go to map'/>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }} onPress={() => navigation.replace('Login')}>
  <Text onPress = {() => navigation.replace('Login')}style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
</TouchableOpacity>      
    </View>
    );
  }

export default HomeScreen;