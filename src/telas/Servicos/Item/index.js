import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CampoInteiro from '../../../components/CampoInteiro'
import Botao from '../../../components/Botao'

import styles from './styles.js'

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1)
  const [total, setTotal] = useState(preco)
  const [expandir, setExpandir] = useState(false)

  const atualizaQuantidadeTotal = novaQuantidade => {
    setQuantidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  const calculaTotal = novaQuantidade => {
    setTotal(novaQuantidade * preco)
  }

  const inverteExpandir = () => {
    setExpandir(!expandir)
    atualizaQuantidadeTotal(1)
  }

  return (
    <>
      <TouchableOpacity style={styles.informacao} onPress={inverteExpandir}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(preco)}
        </Text>
      </TouchableOpacity>

      {expandir && (
        <View style={styles.carrinho}>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Quantidade:</Text>
            <CampoInteiro
              estilos={styles.quantidade}
              valor={quantidade}
              acao={atualizaQuantidadeTotal}
            />
          </View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Total:</Text>
            <Text style={styles.preco}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}
            </Text>
          </View>
          <Botao
            valor="Adicionar ao Carrinho"
            acao={() => {}}
            style={styles.botao}
          />
        </View>
      )}
      <View style={styles.divisor}></View>
    </>
  )
}
