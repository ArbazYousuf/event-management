import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda, Arrow } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "./Header";
import { Actions } from "react-native-router-flux";

export default class Calender extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#6D79FF', '#46A8FF', '#23D2FF']}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header isMenu={true} title={"Tue, 05-11-2019"} />
        <View style={{ flex: 1 }}>
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
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
            <TouchableOpacity
              style={{
                width: 200,
                height: 40,
                backgroundColor: "rgba(255,255,255, 0.6)",
                alignItems: "center",
                marginTop: 10,
                borderRadius: 50,
                flexDirection: "row",
                display: "flex",
                padding: 2,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 33,
                  height: 33,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 2
                }}
              >
                <Text style={{ color: "darkgray", fontSize: 14 }}> 01 </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 20
                }}
              >
                <Text style={{ color: "#249DEB", fontWeight: "400" }}>
                  Event 1
              </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 25
                }}
              >
                <Text style={{ color: "gray", fontSize: 10 }}>12:44 am</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 200,
                height: 40,
                backgroundColor: "rgba(255,255,255, 0.6)",
                alignItems: "center",
                marginTop: 10,
                borderRadius: 50,
                flexDirection: "row",
                display: "flex",
              }}
              onPress={() => Actions.addEmoji()}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 33,
                  height: 33,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 3
                }}
              >
                <Text style={{ color: "darkgray", fontSize: 14 }}> 01 </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 20
                }}
              >
                <Text style={{ color: "#249DEB", fontWeight: "400" }}>
                  Event 1
              </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 25
                }}
              >
                <Text style={{ color: "gray", fontSize: 10 }}>12:44 am</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
