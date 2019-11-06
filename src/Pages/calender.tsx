import React, { Component } from "react";
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda, Arrow } from "react-native-calendars";

export default class Calender extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <Calendar /> */}
        <Calendar
          onDayPress={day => {
            console.log("selected day", day);
          }}
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          onMonthChange={month => {
            console.log("month changed", month);
          }}
        />
      </View>
    );
  }
}
