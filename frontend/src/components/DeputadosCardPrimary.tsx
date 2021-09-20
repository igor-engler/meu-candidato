import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface DeputadosCardPrimary extends RectButtonProps {
  data: {
    nome: string;
    foto: string;
  }
}

export function DeputadosCardPrimary({ data, ...rest }: DeputadosCardPrimary) {
  return (
    <RectButton
      style={styles.container}
      onPress={() => console.log(data.foto)}
      {...rest}
    >
      <Image 
        source={
          {
            uri: data.foto,
            width: 80,
            height: 80
          }
        }
        resizeMode={'cover'}
      />
      <Text style={styles.text}>
        { data.nome }
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }
})