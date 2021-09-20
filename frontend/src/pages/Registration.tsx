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

import { createUser } from "../services/api";

import { Button } from '../components/Button'

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function Registration() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmedPassword, setConfirmedPassword] = useState<string>()

  function handleInputBlut() {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleNameInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  function handleEmailInputChange(value: string) {
    setIsFilled(!!value)
    setEmail(value)
  }

  function handlePasswordInputChange(value: string) {
    setIsFilled(!!value)
    setPassword(value)
  }

  function handleConfirmedPasswordInputChange(value: string) {
    setIsFilled(!!value)
    setConfirmedPassword(value)
  }

  const navigation = useNavigation()

  function handleLogin() {
    navigation.navigate('FirstPage')
  }

  const [visible, setVisible] = useState(false)

  function validateEmail(value: string | undefined): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  function validadePassword(password: string, confirmedPassword: string): boolean {
    if (password === confirmedPassword) {
      return true
    }

    return false
  }

  async function register() {

    if (!name) {
      Alert.alert('Nome inválido!', 'Por favor preencha o campo nome com seu nome ou apelido.')
      return undefined
    }

    if (!validateEmail(email)) {
      Alert.alert('Email Inválido!', 'Por favor informe um email válido.')
      return undefined
    }

    if (!password || !confirmedPassword) {
      Alert.alert('Senhas inválidas', 'Por favor preencha o campo senha e o campo confirma senha.')
      return undefined
    }

    if ((password as string).length < 8) {
      Alert.alert('Senha inválida', 'Por favor informe uma senha com no minimo 8 caracteres.')
      return undefined
    }

    if (!validadePassword(password as string, confirmedPassword as string)) {
      Alert.alert('Senha inválida', 'As senhas não conferem.')
      return undefined
    }

    const user = {
      "email": email,
      "name": name,
      "password": password
    }

    const response: any = await createUser(user, 'users', 'post')
    const data = response[0]
    const code = response[1]

    if (code === 201) {
      Alert.alert('Usuário cadastrado com sucesso!')
      navigation.navigate('UserIdentification')
    } else if (code === 400) {
      Alert.alert('Erro!', data.Error)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.title}>
              Cadastro de {'\n'}
              usuário {'\n'}
            </Text>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Nome"
              onBlur={handleInputBlut}
              onFocus={handleInputFocus}
              onChangeText={handleNameInputChange}
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="E-mail"
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
              placeholder="Senha"
              onBlur={handleInputBlut}
              onFocus={handleInputFocus}
              onChangeText={handlePasswordInputChange}
            />
            <TextInput
              secureTextEntry={true}
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Repita a senha"
              onBlur={handleInputBlut}
              onFocus={handleInputFocus}
              onChangeText={handleConfirmedPasswordInputChange}
            />

            <View style={styles.footer} >
              <Button
                title="Cadastre-se"
                onPress={register}
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
  }

})