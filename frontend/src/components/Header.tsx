import React from "react"
import { 
  TouchableOpacityProps,
  Text, 
  StyleSheet, 
  View 
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface HeaderProps extends TouchableOpacityProps {
  name: string
}

export function Header({ name, ...rest }: HeaderProps) {
  return (
    <View
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 30
  },
  text: {
    fontSize: 48,
    color: colors.white,
    fontFamily: fonts.heading
  }
})