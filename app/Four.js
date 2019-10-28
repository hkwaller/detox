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
      <Text h1>{clicks}</Text>
      <Button
        type="outline"
        raised
        title="Increase please"
        onPress={() => setClicks(clicks + 1)}
      />
    </Screen>
  )
}

export default Three
