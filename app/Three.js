import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Input } from 'react-native-elements'
import Screen from 'app/components/Screen'
import data from './fakeusers'

const Three = () => {
  return (
    <Screen style={{ backgroundColor: 'snow' }}>
      <Input label="Fin input" placeholder="Kanskje skrive litt tekst her..." />
    </Screen>
  )
}

export default Three
