import React from 'react';
import { StyleSheet } from 'react-native'
import Routes from './routes';


// LocaleConfig.locales['fr'] = {
//   monthNames: ['January', 'Feburary', 'March', 'Apirl', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   monthNamesShort: ['Jan', 'Feb.', 'Mar', 'Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep.', 'Oct', 'Nov', 'Dex'],
//   dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sun'],
//   dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
//   today: 'Aujourd\'hui'
// };
// LocaleConfig.defaultLocale = 'fr';

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
