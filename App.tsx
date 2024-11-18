/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigation } from './src/RootNavigation';



function App(): React.JSX.Element {
  return <SafeAreaProvider><RootNavigation /></SafeAreaProvider>;
}


export default App;
