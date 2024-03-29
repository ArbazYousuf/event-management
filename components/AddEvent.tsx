import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
// import { Calendar, LocaleConfig, Agenda } from 'react-native-calendars';
import { Icon, Button } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "./Header";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import * as moment from "moment";
import { Actions } from "react-native-router-flux";
import * as firebase from "firebase";
import TimePicker from "react-native-24h-timepicker";
// LocaleConfig.locales['fr'] = {
//   monthNames: ['January', 'Feburary', 'March', 'Apirl', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   monthNamesShort: ['Jan', 'Feb.', 'Mar', 'Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep.', 'Oct', 'Nov', 'Dex'],
//   dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sun'],
//   dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
//   today: 'Aujourd\'hui'
// };
// LocaleConfig.defaultLocale = 'fr';

export default class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-05-15",
      image: null,
      isDateTimePickerVisible: false,
      date: "",
      name: "",
      //   date: "",
      time: "",
      repeat: "",
      description: "",
      reminder: "",
      realDate: "",
    };
  }

  getInputsFieldValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  AddEvent = () => {
    let { name, realDate, time, repeat, description, reminder, image } = this.state;
    if (
      name == "" &&
      realDate == "" &&
      time == "" &&
      repeat == "" &&
      description == "" &&
      reminder == ""
    ) {
      alert("Kindly fill all field");
    } else if (name == "") {
      alert("Kindly add Event Name");
    } else if (realDate == "") {
      alert("Kindly Add Event Data");
    } else if (repeat == "") {
      alert("Kindly Add Event Repeats");
    } else if (description == "") {
      alert("Kindly Add Description");
    } else if (description == "") {
      alert("Kindly Add Reminder");
    } else {
      console.log(this.state)
      // let storage = firebase.storage();
      // var storageRef = storage.ref().child('Images');

      // Get a reference to store file at photos/<FILENAME>.jpg
      // var photoRef = storageRef.child("name");
      // Upload file to Firebase Storage
      // var uploadTask = photoRef.put(image.uri);
      // uploadTask.on('state_changed', null, null, function() {
      // When the image has successfully uploaded, we get its download URL
      //   var downloadUrl = uploadTask.snapshot.downloadURL;
      //   console.log(downloadUrl)
      // Set the download URL to the message box, so that the user can send it to the database
      //   textInput.value = downloadUrl;
      // });

      firebase.database()
        .ref("events/")
        .push({
          Name: name,
          Date: String(realDate),
          Time: time,
          Repeat: repeat,
          Description: description,
          Reminder: reminder
        })
        .then(suc => {
          alert("successfully pushed data");
          Actions.todoList()
          console.log(suc, "hogya")
        });
    }
  };

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }


  render() {
    let { date, isDateTimePickerVisible } = this.state;
    return (
      <LinearGradient
        colors={["#6D79FF", "#46A8FF", "#23D2FF"]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Header title="Add Event" />
        {/* <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}> */}
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Event title{" "}
            </Text>
            <TextInput
              style={{
                backgroundColor: "rgba(255, 255,255, 0.2)",
                width: "100%",
                padding: 8,
                color: "white"
              }}
              placeholder="Event name"
              onChangeText={text => this.getInputsFieldValue("name", text)}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Start date{" "}
            </Text>
            <TouchableOpacity
              onPress={this.showDateTimePicker}
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                value={date}
                style={{
                  backgroundColor: "rgba(255, 255,255, 0.2)",
                  width: "100%",
                  padding: 8,
                  color: "white",
                  flex: 1
                }}
                placeholder="Event date"
                onChangeText={text => this.getInputsFieldValue("date", text)}
              />
              <Icon
                style={{
                  padding: 7.7,
                  color: "white",
                  backgroundColor: "rgba(255, 255,255, 0.2)"
                }}
                type="FontAwesome"
                name="calendar"
              />
              <DateTimePicker
                isVisible={isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "rgba(255, 255,255, 0.2)",
                  width: "100%",
                  padding: 8,
                  color: "white",
                  flex: 1
                }}
                value={this.state.time}
                placeholder="Event time"
              // onChangeText={text => this.getInputsFieldValue("time", text)}
              />
              <Icon
                style={{
                  padding: 7.7,
                  color: "white",
                  backgroundColor: "rgba(255, 255,255, 0.2)"
                }}
                type="AntDesign"
                name="clockcircle"
                onPress={() => this.TimePicker.open()}
              />
            </View>
            <TimePicker
              ref={ref => {
                this.TimePicker = ref;
              }}
              onCancel={() => this.onCancel()}
              onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <Text style={{ color: "white", marginBottom: 10 }}> Repeats </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "rgba(255, 255,255, 0.2)",
                  width: "100%",
                  padding: 8,
                  color: "white",
                  flex: 1
                }}
                placeholder="Event repeats"
                onChangeText={text => this.getInputsFieldValue("repeat", text)}
              />
              <Icon
                style={{
                  padding: 7.7,
                  color: "white",
                  backgroundColor: "rgba(255, 255,255, 0.2)"
                }}
                type="FontAwesome"
                name="repeat"
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Desription{" "}
            </Text>
            <TextInput
              style={{
                backgroundColor: "rgba(255, 255,255, 0.2)",
                width: "100%",
                padding: 10,
                height: 80,
                paddingBottom: 50,
                color: "white"
              }}
              placeholder="Description"
              onChangeText={text =>
                this.getInputsFieldValue("description", text)
              }
            />
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "rgba(255, 255,255, 0.2)",
                  width: "100%",
                  padding: 8,
                  color: "white",
                  flex: 1
                }}
                placeholder="Reminder"
                onChangeText={text =>
                  this.getInputsFieldValue("reminder", text)
                }
              />
              <Icon
                style={{
                  padding: 7.7,
                  color: "white",
                  backgroundColor: "rgba(255, 255,255, 0.2)"
                }}
                type="FontAwesome"
                name="bell"
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: 10,
              width: "90%"
            }}
          >
            <TouchableOpacity
              onPress={this._pickImage}
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                pointerEvents="none"
                style={{
                  backgroundColor: "rgba(255, 255,255, 0.2)",
                  width: "100%",
                  padding: 8,
                  color: "white",
                  flex: 1
                }}
                placeholder="Upload picture"
              />
              <Icon
                style={{
                  padding: 7.7,
                  color: "white",
                  backgroundColor: "rgba(255, 255,255, 0.2)"
                }}
                type="FontAwesome"
                name="camera"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              width: "100%"
            }}
          >
            <Button
              onPress={() => this.AddEvent()}
              style={{
                flex: 1,
                width: 200,
                backgroundColor: "rgba(255, 255,255, 0.7)",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "transparent"
              }}
            >
              <Text style={{ textAlign: "center", width: "100%" }}>
                Save event
              </Text>
            </Button>
          </View>
        </ScrollView>
        {/* </ScrollView> */}
      </LinearGradient>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("=== ", date);
    console.log(moment.utc(date).format("DD/MM/YYYY"));
    this.setState({
      date: moment.utc(date).format("DD/MM/YYYY"),
      realDate: new Date(date),
    });
    console.log("A date newly has been picked: ");
    this.hideDateTimePicker();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
