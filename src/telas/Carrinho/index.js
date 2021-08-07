import React from 'react'
import { FlatList } from 'react-native'

import Item from './Item'

import StatusCarrinho from '../../components/StatusCarrinho'

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'Não dê banho no seu gato, deixe para nós',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Vacina v4',
    preco: 89.9,
    descricao: 'Descrição para a Vacina v4 para o seu gato',
    quantidade: 2,
  },
  {
    id: 3,
    nome: 'Vacina antirrábica',
    preco: 49.9,
    descricao: 'O seu gato precisa desta vacina pelo menos uma vez por ano',
    quantidade: 1,
  },
]

export default function Carrinho() {
  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  )

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}
