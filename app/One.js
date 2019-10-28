import React, { useState } from 'react'
import { View, StyleSheet, LayoutAnimation } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Screen from 'app/components/Screen'

const MoreInfo = ({ navigation }) => {
  const [header, setHeader] = useState('Fin header tekst')

  function changeHeader(text) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

    setHeader(text)
  }

  const { bg } = navigation.state.params

  return (
    <Screen style={{ backgroundColor: bg }}>
      <Text h2>{header}</Text>
      <Button
        raised
        type="outline"
        title="Jeg vil endre teksten i headeren bitte"
        containerStyle={{ marginTop: 40 }}
        buttonStyle={{ padding: 30 }}
        onPress={() => changeHeader('Skikkelig skikkelig fin tekst')}
        onLongPress={() => changeHeader('Langtrykk tekst')}
      />
    </Screen>
  )
}

MoreInfo.navigationOptions = () => ({
  title: 'More Info',
})

export default MoreInfo
