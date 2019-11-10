import React from 'react';
import { StyleSheet, View } from 'react-native'
import Routes from './routes';
import {firebaseConfig} from "./firebaseConfig"


export default class App extends React.Component {
  render() {
    return (
      <View>
        {firebaseConfig}
        <Routes />
      </View>
    );
  }
}
