import React from 'react'
import { TextInput } from 'react-native'

import stylesDefault from './styles.js'

export default function CampoInteiro({ valor, estilos, acao }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/)
    if (!verificaInteiro) return

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')

    acaoRetorno(removeZeroEsquerda)
  }

  const numeroEmTexto = String(valor)

  return (
    <TextInput
      style={[stylesDefault.campos, estilos]}
      keyboradType="number-pad"
      selectTextOnFocus
      onChangeText={novoValor => {
        atualiza(novoValor, acao)
      }}
      value={numeroEmTexto}
    />
  )
}
