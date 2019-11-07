import React, { Component } from "react";
import { View, Text, TouchableOpacity,  } from "react-native";
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
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
          <TouchableOpacity style={{width: 200, height: 40, backgroundColor: "red", borderRadius: 50, padding: 2}}>
            <View style={{backgroundColor: "white", width: 35, height: 35, borderRadius: 50}}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
