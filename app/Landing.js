import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, Text, Card, Icon } from 'react-native-elements'
import Screen from 'app/components/Screen'

const Landing = ({ navigation }) => {
  return (
    <Screen style={{ backgroundColor: 'gold' }}>
      <Card title="Velkommen">
        <Text style={{ marginBottom: 10 }}>Hey yo.</Text>
        <Button
          onPress={() => navigation.push('MoreInfo')}
          style={styles.button}
          title="Go further"
          type="outline"
        />
      </Card>
    </Screen>
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
})

export default Landing
