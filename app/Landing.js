import React from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Text, Card, Icon } from 'react-native-elements'

const NavigationButton = ({ onPress, title, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text h1>Gå til {title}</Text>
  </TouchableOpacity>
)

const bg = {
  one: '#dcffcc',
  two: '#9fdfcd',
  three: '#baabda',
  four: '#d79abc',
}

const Landing = ({ navigation }) => {
  return (
    <>
      <NavigationButton
        onPress={() => navigation.push('One', { bg: bg.one })}
        style={styles.listButton}
        backgroundColor={bg.one}
        title="1"
      />
      <NavigationButton
        onPress={() => navigation.push('Two', { bg: bg.two })}
        style={styles.listButton}
        backgroundColor={bg.two}
        title="2"
      />
      <NavigationButton
        onPress={() => navigation.push('Three', { bg: bg.three })}
        style={styles.listButton}
        backgroundColor={bg.three}
        title="3"
      />
      <NavigationButton
        onPress={() => navigation.push('Four', { bg: bg.four })}
        style={styles.listButton}
        backgroundColor={bg.four}
        title="4"
      />
    </>
  )
}

Landing.navigationOptions = {
  title: 'Landing Page',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  button: {
    marginTop: 40,
  },
  listButton: {
    marginTop: 25,
  },
})

export default Landing
