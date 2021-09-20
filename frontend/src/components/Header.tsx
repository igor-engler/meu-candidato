import React, { useState } from "react"
import { 
  TouchableOpacityProps,
  Text, 
  StyleSheet, 
  View, 
  FlatList
} from 'react-native'

import { DeputadosProps, estados as states } from '../libs/storage';

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { EstadosButton } from "./estadosButton";

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
      <FlatList
        data={estados}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item}) => (
          <EstadosButton 
            title={item.title}
            onPress={() => handleEstadoSelected(item.key)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.estadosList}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{ marginRight: 32 }}
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
  text: {
    fontSize: 48,
    color: colors.white,
    fontFamily: fonts.heading
  },
  estadosList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32
  }
})