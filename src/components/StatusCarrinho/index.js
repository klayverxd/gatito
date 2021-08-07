import React from 'react'
import { Text, View } from 'react-native'
import Botao from '../Botao'

import styles from './styles'

export default function StatusCarrinho({ total }) {
  return (
    <View style={styles.conteudo}>
      <View tyle={styles.total}>
        <Text style={styles.descricao}>Total do carrinho</Text>
        <Text style={styles.valor}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </Text>
      </View>
      <View style={styles.botao}>
        <Botao valor="Concluir pedido" invertido />
      </View>
    </View>
  )
}
