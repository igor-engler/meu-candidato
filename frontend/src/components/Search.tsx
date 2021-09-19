import React, { useState } from "react"
import {
  TouchableOpacityProps,
  StyleSheet,
  View,
  TextInput
} from 'react-native'
import { FlatList } from "react-native-gesture-handler"

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface HeaderProps extends TouchableOpacityProps {
}

export function Search({ ...rest }: HeaderProps) {

  const [isFocused, setIsFocused] = useState(false)
	const [isFilled, setIsFilled] = useState(false)
  const [search, setSearch] = useState<string>();

	function handleInputBlut() {
		setIsFocused(false)
		setIsFilled(!!search)
	}

	function handleInputFocus() {
		setIsFocused(true)
	}

  function handleInputChange(){
    setSearch(search)
    console.log(search)
  }

  return (
    <View
      style={styles.container}
      {...rest}
    >
      <TextInput
        secureTextEntry={true}
        style={[
          styles.input,
          (isFocused || isFilled) && { borderColor: colors.green }
        ]}
        placeholder="Digite o nome de um deputado"
        onBlur={handleInputBlut}
        onFocus={handleInputFocus}
        value={search}
        onChangeText={text => setSearch(text)}
        onChange={handleInputChange}
      />
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
  input: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.heading,
		width: '90%',
		fontSize: 18,
    fontFamily: fonts.text,
		textAlign: 'center'
	},

})