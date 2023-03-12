import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useFonts, IBMPlexMono_400Regular } from '@expo-google-fonts/ibm-plex-mono';

import styles from './styles';
import BenefitsScreen from './screens/BenefitsScreen';

const myImageSource = require('./assets/images/logo.png');

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Select Your Industry</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Benefits', { industry: 'retail' })}
        >
          <Text style={styles.buttonText}>Retail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Benefits', { industry: 'technology' })}
        >
          <Text style={styles.buttonText}>Technology</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Benefits', { industry: 'finance' })}
        >
          <Text style={styles.buttonText}>Finance</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3001/api', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(`Data from get request: ${data}`);

  // TODO: why won't my fonts load??
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Benefits"
          component={BenefitsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}