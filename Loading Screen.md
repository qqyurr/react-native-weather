# Loading Screen

> Loading.js 파일 생성

```react
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return <View style={styles.container}>
    <Text style={styles.text}>Getting the fucking weather</Text>
  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FDF6AA'
  },
  text: {
    color: "navy",
    fontSize: 29

  }
})
```

> App.js에 Loading.js를 import 해준다

```react
import React from 'react';
import Loading from "./Loading";

export default function App() {
  return <Loading/>
}
```

