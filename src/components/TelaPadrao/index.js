import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

import globalStyles, { cores } from '../../styles.js'
import styles from './styles'

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={styles.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} />
        {/* input fica visível */}
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={globalStyles.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.ajusteTelaBaixo} />
    </>
  )
}
