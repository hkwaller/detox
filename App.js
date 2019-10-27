import React, { Fragment } from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>text</Text>
        <Button raised title="Press me!" />
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

export default App
