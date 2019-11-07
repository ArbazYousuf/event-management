import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './components/Header'

import Calender from './components/calender';



export default class App extends React.Component {
 

  render() {
    return (
      <LinearGradient
        colors={['#6D79FF', '#46A8FF', '#23D2FF']}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Calender />
      </LinearGradient >
    );
  }

 

}
