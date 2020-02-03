import React from "react"
import { Text, View, StyleSheet } from "react-native"

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    borderWidth: 3,
    backgroundColor: "red",
    height: 100,
    width: 100
  },
  viewTwoStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    height: 100,
    width: 100,
    top: 100
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: "purple",
    height: 100,
    width: 100
  }
})

export default BoxScreen
