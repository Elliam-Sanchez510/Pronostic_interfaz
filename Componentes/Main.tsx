import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Body from "./Body";

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Body />
      </View>
    </View>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    alignItems: "center",
  },
});
