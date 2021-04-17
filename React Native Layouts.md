# React Native Layouts

> css 처럼 부모 속성을 상속 받지 않는다. Stylesheet을 이용해 따로 지정해줘야한다. 

리액트 네이티브에서 모든 flexbox의 default는 flexDirection이 컬럼(column) [웹 사이트의 경우엔 row]

```react
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gyuyeon</Text>
      <Text style={styles.text}>Weather</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "white"
  }
});

```

> 리액트 네이티브에서 모든 flexbox의 default는 flexDirection이 컬럼(column) [웹 사이트의 경우엔 row]



> flex를 활용한 layout

```react
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowContainer}></View>
      <View style={styles.blueContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueContainer: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

```

> 부모 container의 flex가 1이라면 화면 전체를 쓰겠다는 의미
>
> 자식인 yellowContainer와 blueContainer의 flex 비율에 따라 화면이 설정 yellowContainer는 화면의 1/4를 차지

