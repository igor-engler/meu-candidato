import React, { useState } from "react"
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { auth } from "../services/api";

import Modal from 'react-native-modal'

import { Button } from '../components/Button'

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [visible, setVisible] = useState(false)

  function handleInputBlut() {
    setIsFocused(false)
    setIsFilled(!!email)
  }
  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleEmailInputChange(value: string) {
    setIsFilled(!!value)
    setEmail(value)
  }

  function handlePasswordInputChange(value: string) {
    setIsFilled(!!value)
    setPassword(value)
  }

  const navigation = useNavigation()

  async function handleLogin() {
    //navigation.navigate('FirstPage')

    const user = {
      "email": email,
      "password": password
    }

    const response: any = await auth(user, 'sessions', 'post')

    const data = response[0]
    const code = response[1]

    if (code === 400) {
      Alert.alert('Erro!', data.Error)
    }

    console.log(data, code)

    if (code === 201) {
      navigation.navigate("FirstPage",
        {
          email: email
        }
      )
    }
  }

  function handleRegistration() {
    navigation.navigate('Registration')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.title}>
              Meu candidato {'\n'}
              Deputados Federais {'\n'}
            </Text>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Digite seu E-mail"
              onBlur={handleInputBlut}
              onFocus={handleInputFocus}
              onChangeText={handleEmailInputChange}
            />
            <TextInput
              secureTextEntry={true}
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Digite sua Senha"
              onBlur={handleInputBlut}
              onFocus={handleInputFocus}
              onChangeText={handlePasswordInputChange}
            />
            <View style={styles.footer}>
              <Button
                title="Login"
                onPress={handleLogin}
              />
            </View>
            <TouchableOpacity onPress={() => { setVisible(true) }} >
              <Text style={styles.colorful}>
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
            <Modal onBackdropPress={() => setVisible(false)} isVisible={visible}>
              <View style={{ backgroundColor: 'white', height: 400 }}>
                <Text style={styles.title}>
                  {'\n'}
                  Recuperar {'\n'}
                  senha {'\n'}
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: colors.green }
                  ]}
                  placeholder="Insira um e-mail associado à conta"
                  onBlur={handleInputBlut}
                  onFocus={handleInputFocus}
                  onChangeText={handleEmailInputChange}
                />
                <TextInput />
                <View style={styles.footer}>
                  <Button
                    title="Recuperar senha"
                  />
                </View>
              </View>
            </Modal>

            <View style={styles.footer} >
              <Button
                title="Cadastre-se"
                onPress={handleRegistration}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'

  },
  title: {
    fontSize: 25,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  footer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20
  },
  colorful: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginTop: 22,
    fontSize: 18
  },
  modal: {
    borderColor: colors.green
  },
})