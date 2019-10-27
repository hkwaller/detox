import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LandingScreen from './app/Landing'
import MoreInfoScreen from './app/MoreInfo'

const AppNavigator = createStackNavigator({
  Landing: { screen: LandingScreen },
  MoreInfo: { screen: MoreInfoScreen },
})

export default createAppContainer(AppNavigator)
