import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LandingScreen from './app/Landing'
import OneScreen from './app/One'
import TwoScreen from './app/Two'
import ThreeScreen from './app/Three'
import FourScreen from './app/Four'

const AppNavigator = createStackNavigator({
  Landing: { screen: LandingScreen },
  One: { screen: OneScreen },
  Two: { screen: TwoScreen },
  Three: { screen: ThreeScreen },
  Four: { screen: FourScreen },
})

export default createAppContainer(AppNavigator)
