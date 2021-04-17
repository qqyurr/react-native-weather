# Asking for Permissions

```react
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
      // 퍼미션 받기
      await Location.requestForegroundPermissionsAsync()
      // 주소 가져오기
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
    //state의 isLoading 값을 isLoading이라는 const로 가져오기
    const { isLoading } = this.state;
    // isLoading이 false라면 화면에 아무것도 보이지 않게
    return isLoading ? <Loading/> : null;
  }
}
  
```

> async await을 사용하여 퍼미션 받고, 그 이후에 주소 가져오기