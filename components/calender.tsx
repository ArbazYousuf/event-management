import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "./module/react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";
import * as moment from "moment";
import { Actions } from "react-native-router-flux";
import { Header } from "./Header";

export default class Calender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Events: [],
      currentDate: '',
    };
  }

  componentDidMount() {
    this.setState({ currentDate: new Date() })
    firebase
      .database()
      .ref("events")
      .on("value", snap => {
        this.setState({
          Events: Object.values(snap.val())
        });
      });
  }
  render() {
    const { Events, currentDate } = this.state;
    console.log(currentDate ? moment.utc(currentDate).format("YYYY-MM-DD") : moment.utc(new Date()).format("YYYY-MM-DD"))
    return (
      <LinearGradient
        colors={["#6D79FF", "#46A8FF", "#23D2FF"]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Header isMenu={true} title={"Tue, 18 2019"} />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{ flex: 1.5, justifyContent: 'flex-end' }}>
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
              current={currentDate ? moment.utc(currentDate).format("YYYY-MM-DD") : moment.utc(new Date()).format("YYYY-MM-DD")}
              onDayPress={day => {
                console.log("selected day", day);
                this.setState({ currentDate: new Date(day.dateString) })
                return
                // if (this.state.data) {
                //   let data = this.state.data;
                //   // this.setState({data1: []})
                //   let myData = [];
                //   let date = moment.utc(day.dateString).format("DD/MM/YYYY");
                //   data.map(value => {
                //     if (date == value.eventDate) {
                //       console.log("matched");
                //       myData.push(value);
                //       this.setState({
                //         data1: myData
                //       });
                //     }
                //   });
                // }
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
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              flex: 1
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                padding: 2
              }}
            >


              {Events && Events.length ? Events.map((value, key) => {
                let a = new Date(value.Date);
                let b = currentDate
                if (a.getDate() == b.getDate() && a.getMonth() == b.getMonth() && a.getYear() == a.getYear()) {
                  return (
                    <TouchableOpacity
                      key={key}
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
                          {value.Name}
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
                          {value.Time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )
                }
              })
                : null}
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
