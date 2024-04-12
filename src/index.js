import { AppRegistry } from 'react-native';
import App from './App';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

AppRegistry.registerComponent('main', () => App);
