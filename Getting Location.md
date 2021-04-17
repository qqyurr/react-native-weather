# 1-2. Getting Location

```react
// import { Stm 'react';
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync()
    console.log(location)
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    return <Loading/>
  }
}
  
```

>expo의 API인 Location을 import 하여 await async로 비동기 함수로 만들어준다.