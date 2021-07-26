import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/Useridentification'
import { FirstPage } from '../pages/FirstPage'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
          <stackRoutes.Navigator
                    headerMode='none'
                    screenOptions={{
                              cardStyle: {
                                        backgroundColor: colors.white
                              }
                    }}>

                    <stackRoutes.Screen
                              name="Welcome"
                              component={Welcome}
                    />

                    <stackRoutes.Screen
                              name="UserIdentification"
                              component={UserIdentification}
                    />

                    <stackRoutes.Screen
                              name="FirstPage"
                              component={FirstPage}
                    />


          </stackRoutes.Navigator>
)

export default AppRoutes