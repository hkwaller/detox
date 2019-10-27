import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  flex: 1,
  padding: 40,
})

const Screen = ({ children, style }) => (
  <View style={[styles, style]}>{children}</View>
)

export default Screen
