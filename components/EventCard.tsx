import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux"
import * as moment from 'moment'

export class EventCard extends React.Component {
  // console.log(this.props)
  render() {
    return (
      <TouchableOpacity onPress={() => Actions.calendar()} style={{ flexDirection: "row", height: 55 }}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Icon
            type="FontAwesome5"
            name="circle"
            style={{ color: "white", fontSize: 8 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: 3
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {this.props.data.Name}
          </Text>
          <Text style={{ fontSize: 10, color: "white" }}>
            {moment.utc(new Date(this.props.data.Date)).format("YYYY-MM-DD")}
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: 60,
              height: 35,
              borderBottomColor: "white",
              borderWidth: 1,
              backgroundColor: "#B0E4F6",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {this.props.data.Time}
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Icon
            type="FontAwesome5"
            name="times"
            style={{ color: "white", fontSize: 15 }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
