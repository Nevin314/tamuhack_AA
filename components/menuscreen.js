import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';

const MyComponent = () => {
  // Generate random values for the user information
  const username = 'plasrelm';
  const points = Math.floor(Math.random() * 1000); // Random points between 0 and 1000
  const destinations = ['City A', 'City B', 'City C']; // Example destinations

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.discordapp.com/attachments/1200882082977685687/1201097160456937512/Sky_Score-modified_1.png?ex=65c893e6&is=65b61ee6&hm=face50513531a7a83e1f3bd11311aab32d62891bffe7a82bbb7c15bf8a15fcd2&',
        }}
        style={styles.logo}
      />
      {/* User information */}
      <View style={styles.userInfoContainer}>
        <Text style={[styles.username, { color: 'white' }]}>{username}</Text>
        <Text style={[styles.userInfoDetail, { color: 'white' }]}> Points: {points}</Text>
        <Text style={[styles.userInfoDetail, { color: 'white' }]}>Last Three Destinations:</Text>
        <View style={styles.destinationsContainer}>
          {destinations.map((destination, index) => (
            <Text key={index} style={[styles.destinationText, { color: 'white' }]}>
              ✈ {destination}
            </Text>
          ))}
        </View>
      </View>

      {/* Bottom buttons */}
      <View style={styles.buttonContainer}>
        <Button title="MyTravel" onPress={() => handleButtonPress('MyTravel')} color="#13128B" />
        <Button title="Leaderboard" onPress={() => handleButtonPress('Leaderboard')} color="#13128B" />
        <Button title="MyReviews" onPress={() => handleButtonPress('MyReviews')} color="#13128B" />
      </View>
    </View>
  );
};

const handleButtonPress = (buttonName) => {
  console.log(`${buttonName} button pressed`);
  // Add your navigation logic or other actions here
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 5, // Move the entire content up a little more
    paddingHorizontal: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#13128B',
    padding: 20,
    width: '100%',
    marginTop: 30, // Move the text box up a little more
    borderRadius: 10, // Round the edges
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 5, // Move the image up a little more
    borderRadius: 10, // Round the edges
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userInfoDetail: {
    fontSize: 16,
    marginBottom: 8,
  },
  destinationsContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  destinationText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20, // Move the buttons down a little more
    borderRadius: 10, // Round the edges
  },
});

export default MyComponent;
