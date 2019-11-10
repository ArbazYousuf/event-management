import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "./module/react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import * as moment from "moment";
import { ActionSheet } from "native-base";
import { Actions } from "react-native-router-flux";

export default class Calender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: []
    };
  }

  componentDidMount() {
    console.log(Actions)
    firebase
      .database()
      .ref("/events/data/")
      .on("value", snap => {
        this.setState({
          data: Object.values(snap.val())
        });
        console.log("data agya", this.state.data);
      });
  }
  render() {
    return (
      <LinearGradient
        colors={["#6D79FF", "#46A8FF", "#23D2FF"]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {/* <Calendar /> */}
        <Calendar
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            headerBackgroundColor: "black",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            // headerBackgroundColor: "black",
            todayTextColor: "#ffffff",
            todayBackgroundColor: "#FFEA7D",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            arrowColor: "white",
            // monthTextColor: "blue",
            indicatorColor: "white",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "500",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            monthTextColor: "#ffffff"
          }}
          onDayPress={day => {
            console.log("selected day", day);
            if (this.state.data) {
              let data = this.state.data;
              // this.setState({data1: []})
              let myData = [];
              let date = moment.utc(day.dateString).format("DD/MM/YYYY");
              data.map(value => {
                if (date == value.eventDate) {
                  console.log("matched");
                  myData.push(value);
                  this.setState({
                    data1: myData
                  });
                }
              });
            }
          }}
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // theme={{
          // selectedDayBackgroundColor: "#FFEA7D",
          // selectedDayTextColor: '#ffffff',
          // }}
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
              display: "flex",
              padding: 2
            }}
          >
        

            {this.state.data1.length ? (
              this.state.data1.map(value => (
                <TouchableOpacity
                  style={{
                    width: 200,
                    height: 40,
                    backgroundColor: "rgba(255,255,255, 0.6)",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 50,
                    flexDirection: "row",
                    display: "flex"
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
                    <Text style={{ color: "darkgray", fontSize: 14 }}>
                      {" "}
                      01{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 20
                    }}
                  >
                    <Text style={{ color: "#249DEB", fontWeight: "400" }}>
                      {value.eventName}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 45
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 10 }}>
                      {value.eventTime}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              this.state.data ? this.state.data.map((value) => {
                return (
                  <TouchableOpacity
                  style={{
                    width: 200,
                    height: 40,
                    backgroundColor: "rgba(255,255,255, 0.6)",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 50,
                    flexDirection: "row",
                    display: "flex"
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
                    <Text style={{ color: "darkgray", fontSize: 14 }}>
                      {" "}
                      01{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 20
                    }}
                  >
                    <Text style={{ color: "#249DEB", fontWeight: "400" }}>
                      {value.eventName}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 45
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 10 }}>
                      {value.eventTime}
                    </Text>
                  </View>
                </TouchableOpacity>
                )
              }) : <Text></Text>
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
