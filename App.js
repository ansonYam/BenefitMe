import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, IBMPlexMono_400Regular } from '@expo-google-fonts/ibm-plex-mono';

import styles from './styles';
import BenefitsScreen from './screens/BenefitsScreen';
import CompaniesScreen from './screens/CompaniesScreen';

const myImageSource = require('./assets/images/logo.png');

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={localStyles.skip}
        onPress={() => navigation.navigate('Companies')}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={myImageSource} />
      </View>
      <View style={localStyles.formContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.signup}>
          <Text style={localStyles.signupText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
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
          name="Companies"
          component={CompaniesScreen}
        />
        <Stack.Screen
          name="Benefits"
          component={BenefitsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const localStyles = StyleSheet.create({
  skip: {
    fontFamily: IBMPlexMono_400Regular,
    textDecorationLine: 'underline',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  signup: {
    marginTop: 10,
  },
  signupText: {
    color: 'blue',
    textDecorationLine: 'underline',
  }
})