import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Carrinho from './telas/Carrinho'
import Servicos from './telas/Servicos'

import { cores } from './styles'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          activeTintColors: cores.roxo,
          inactiveTintColors: cores.claro,
          activeBackgroundColors: cores.roxo,
          inactiveBackgroundColors: cores.laranja,
          style: {
            height: 70,
          },
          tabBarLabelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.laranja,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          keyBoarHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Servicos" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
