import React, {Fragment} from "react";
import Routes from "./routes";
import Firebase from "./components/firebase";
import * as firebase from "firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    firebase.initializeApp(Firebase.firebaseConfig);
  }

  render() {
    return (
    <Fragment>
    <Routes />
    </Fragment>
    )
  }
}
