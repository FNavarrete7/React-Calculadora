import React from 'react';
import { SafeAreaView, SafeAreaViewBase, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style = {styles.fondo}>
      <StatusBar
      backgroundColor="black"
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  );
}
export default App;
