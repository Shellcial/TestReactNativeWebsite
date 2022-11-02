
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SketchPicker } from 'react-color';
import { ChromePicker } from 'react-color';
import { useState } from 'react';
export default function App() {
  let isMeow = true
  const [newColor, setColor] = useState('#FFF')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ChromePicker color={newColor} onChange={(updatedColor) => { setColor(updatedColor.hex) }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
