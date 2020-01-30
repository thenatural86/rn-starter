import React, { useReducer } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, count: state.count + action.payload }

    case "decrease_counter":
      return { ...state, count: state.count + action.payload }

    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const { count } = state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase_counter", payload: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease_counter", payload: -1 })
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
