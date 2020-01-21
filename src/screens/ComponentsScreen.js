import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {
  const name = "Philip"

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen

// Text is a 'primitive' React element used to show some basic content on the screen

//  View = General purpose element used for grouping other elements or styling

// Image = Show image

// Button = Show a button the user can press. Gives us some feedback whenever the user presses it

// The Stylesheet.create() function validates a set of styling rules that we pass into it. We can use it or pass styling directly into an element
