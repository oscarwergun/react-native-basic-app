import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("ozzy");
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title="Click me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    padding:20,
    
  }
});
