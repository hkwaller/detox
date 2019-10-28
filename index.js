import { AppRegistry, YellowBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  '-[RCTRootView cancelTouches]',
  'Calling bridge.imageLoader',
  'Remote debugger',
])

AppRegistry.registerComponent(appName, () => App)
