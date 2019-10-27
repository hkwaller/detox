import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Screen from 'app/components/Screen'

const MoreInfo = ({ navigation }) => {
  const [header, setHeader] = useState('This is where you find more info')

  return (
    <Screen style={{ backgroundColor: 'cornsilk' }}>
      <Text h2>{header}</Text>
      <Button
        raised
        type="outline"
        title="Change the header please"
        containerStyle={{ marginTop: 40 }}
        onPress={() => setHeader('This is better')}
      />
    </Screen>
  )
}

MoreInfo.navigationOptions = {
  title: 'More Info',
}

export default MoreInfo
