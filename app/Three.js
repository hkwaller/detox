import React from 'react'
import { View, ScrollView } from 'react-native'
import { Input, Text } from 'react-native-elements'
import Screen from 'app/components/Screen'
import data from './fakeusers'

const Three = () => {
  return (
    <Screen style={{ backgroundColor: 'snow' }}>
      <Text h1 style={{ marginBottom: 40 }}>
        Inputs
      </Text>
      <Input label="Fin input" placeholder="Kanskje skrive litt tekst her..." />
    </Screen>
  )
}

export default Three
