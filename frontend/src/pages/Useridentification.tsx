import React, { useState } from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import auth from "../services/api";

import Modal from 'react-native-modal'

import { Button } from '../components/Button'

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function UserIdentification() {
	const [isFocused, setIsFocused] = useState(false)
	const [isFilled, setIsFilled] = useState(false)
	const [name, setName] = useState<string>()
	const [visible, setVisible] = useState(false)

	function handleInputBlut() {
		setIsFocused(false)
		setIsFilled(!!name)
	}
	function handleInputFocus() {
		setIsFocused(true)
	}
	function handleInputChange(value: string) {
		setIsFilled(!!value)
		setName(value)
	}

	const navigation = useNavigation()

	async function handleLogin() {
		//navigation.navigate('FirstPage')

		const user = {
			"email": "igão@teste.com.br",
			"password" : "12345" 
		}

		try{
			const response = await auth(user, 'sessions', 'post')
			console.log(response);
		} catch(err){
			console.log(err);
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
							onChangeText={handleInputChange}
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
							onChangeText={handleInputChange}
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
									onChangeText={handleInputChange}
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