import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Card, Text } from 'react-native-elements'
import Screen from 'app/components/Screen'
import data from './fakeusers'

const images = [
  require('app/images/1.png'),
  require('app/images/2.png'),
  require('app/images/3.png'),
  require('app/images/4.png'),
  require('app/images/5.png'),
  require('app/images/6.png'),
  require('app/images/7.png'),
  require('app/images/8.png'),
  require('app/images/9.png'),
]

const Two = ({ navigation }) => {
  const { bg } = navigation.state.params

  return (
    <Screen style={{ backgroundColor: bg }}>
      <ScrollView testID="scrollView">
        <Text h3 testID="headerText" style={{ marginBottom: 10 }}>
          Jeg forsvinner nok snart
        </Text>
        {data.map((user, index) => {
          return (
            <ListItem
              key={user.id}
              user={user}
              index={index}
              testID={user.testID}
            />
          )
        })}
      </ScrollView>
    </Screen>
  )
}

const ListItem = ({ user, index, testID }) => {
  return (
    <View
      testID={testID}
      style={{
        backgroundColor: 'snow',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        padding: 30,
      }}>
      <Image source={images[index + 1]} />
      <Text h3>{user.name}</Text>
      <Text style={{ marginTop: 20 }}>username: {user.username}</Text>
      <Text style={{ marginTop: 20 }}>email: {user.email}</Text>
    </View>
  )
}

export default Two
