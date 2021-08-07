import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import functionStylesDefault from './styles.js'

export default function Botao({
  pequeno = false,
  invertido = false,
  valor,
  acao,
  styles,
}) {
  const stylesDefault = functionStylesDefault(pequeno, invertido)

  return (
    <TouchableOpacity onPress={acao} style={[stylesDefault.botao, styles]}>
      <Text style={stylesDefault.valor}>{valor}</Text>
    </TouchableOpacity>
  )
}
