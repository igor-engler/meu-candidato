import React from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'


import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function FirstPage() {
    return (
        <Text style={styles.title}>
            Página inicial
        </Text>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 54,
        fontFamily: fonts.heading,
        lineHeight: 35
    }
})