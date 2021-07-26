import React from "react"
import {TouchableOpacity, StyleSheet, SafeAreaView, Text, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native'

import { Button} from '../components/Button'

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function UserIdentification(){
          return (
                    <SafeAreaView style={styles.container}>
                            <KeyboardAvoidingView
                                style={styles.container}
                                behavior={Platform.OS == 'ios'? 'padding' : 'height' }
                            >
                                <View style={styles.content}>
                                                <View style={styles.form}>
                                                        <Text style={styles.title}>
                                                                Meu candidato {'\n'}
                                                                Deputados Federais {'\n'}
                                                                </Text>

                                                        <TextInput
                                                                style={styles.input}
                                                                placeholder="Digite seu E-mail"
                                                        />
                                                        <TextInput
                                                                style={styles.input}
                                                                placeholder="Digite sua Senha"
                                                        />
                                                        <View style={styles.footer}>
                                                                <Button/>
                                                        </View>
                                                        <TouchableOpacity >
                                                                <Text style={styles.colorful}>
                                                                        Esqueceu a senha?
                                                                </Text>
                                                        </TouchableOpacity>

                                                        <View style={styles.footer} >
                                                                <Button/>
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