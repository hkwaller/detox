import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Screen from 'app/components/Screen'
import data from './fakeusers'

const Three = ({ navigation }) => {
  const [clicks, setClicks] = useState(0)

  const { bg } = navigation.state.params

  return (
    <Screen style={{ backgroundColor: bg }}>
      <Text h1 style={{ marginBottom: 30, textAlign: 'center' }}>
        Increase the value
      </Text>
      <Text h3 style={{ alignSelf: 'center', marginBottom: 20 }}>
        {clicks}
      </Text>
      <Button
        testID="increaseButton"
        type="outline"
        raised
        title="Increase please"
        onPress={() => setClicks(clicks + 1)}
      />
    </Screen>
  )
}

export default Three
