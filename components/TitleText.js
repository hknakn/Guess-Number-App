import React from "react";
import { Text, StyleSheet, processColor } from "react-native";

const BodyText = props => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  }
});

export default BodyText;