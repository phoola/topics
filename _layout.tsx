import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <view style={styles.container}>
      <text>Hello React Native</text>
    </view>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full available space
    backgroundColor: "dodgerblue", // Lays out items vertically
    justifyContent: "center", // Space around each item
    alignItems: 'center', // Centers items horizontally
  },
});


