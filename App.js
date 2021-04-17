// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import * as Location from "expo-location";

export default class extends React.Component {
  state= {
    isLoading: true
  }
  getLocation = async () => {
    try {
      // throw Error();
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("can't find you","so sad")
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}
  