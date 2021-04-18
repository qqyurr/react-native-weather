# Getting the weather

```react
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "6fcf0b794f725bba2bbcf2a8ce20c07f";

export default class extends React.Component {
  state= {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data)
  }
  getLocation = async () => {
    try {
      // throw Error();
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
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
  
```

> axios를 이용해 api 호출하여 데이터 받아오기