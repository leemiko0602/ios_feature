import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import BrowserView from './Screens/BrowserView'
import Main from './Screens/Main'



// MainApp: StackNavigator
const MainNavigator = StackNavigator(
  {
    BrowserView: { screen: BrowserView },
    Main: { screen: Main }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
)

class App extends Component {
  render() {
    return <MainNavigator />
  }
}

module.exports = App