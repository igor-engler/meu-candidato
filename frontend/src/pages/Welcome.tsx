import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import ilustracao from '../assets/ilustracao-conceito.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts'


export function Welcome() {
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Acompanhe as {'\n'}
          atividades do seu {'\n'}
          politico eleito de {'\n'}
          maneira eficiente
        </Text>

        <Image
          source={ilustracao}
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Acompanhe os gastos e propostas{'\n'}
          do(s) politico(s) que você elegeu {'\n'}
          ou tem interesse. {'\n'}
          Lembre-se que as eleições não {'\n'}
          acabam após as votações.
        </Text>

        <TouchableOpacity
          style={styles.button}>
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
            onPress={handleStart}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 54,
    fontFamily: fonts.heading,
    lineHeight: 35
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 25
  }
})