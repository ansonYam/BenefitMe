import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import GuestScreen from './screens/GuestScreen';

const myImageSource = require('./assets/images/logo.png');

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.skipButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={myImageSource} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Guest" 
          component={GuestScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;