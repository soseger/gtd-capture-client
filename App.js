import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { getEmail } from "./utils/Store";
import NavContainer from "./NavContainer";
import SetupView from "./components/SetupView";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      loaded: false
    };
  }

  componentDidMount() {
    getEmail()
      .then(email => {
        this.setState({ email: email, loaded: true });
      })
      .catch(error => {
        // TODO: Implement and show ErrorPanel or so
        console.error(error);
      });
  }

  render() {
    const { email, loaded } = this.state;
    if (email) {
      return <NavContainer />;
    } else if (loaded && !email) {
      return <SetupView />;
    } else {
      return <ActivityIndicator size="large" color="blue" />;
    }
  }
}
