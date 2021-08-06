import React from 'react'
import { Text, FlatList } from 'react-native'

import Item from './Item'

const servicos = [
	{
		id: 1,
		nome: 'Banho',
		preco: 79.9,
		descricao: 'Não dê banho no seu gato, deixe para nós',
	},
	{
		id: 2,
		nome: 'Vacina v4',
		preco: 89.9,
		descricao: 'Descrição para a Vacina v4 para o seu gato',
	},
	{
		id: 3,
		nome: 'Vacina antirrábica',
		preco: 49.9,
		descricao: 'O seu gato precisa desta vacina pelo menos uma vez por ano',
	},
]

export default function Servicos() {
	return (
		<>
			<Text>Serviços!</Text>
			<FlatList
				data={servicos}
				renderItem={({ item }) => <Item {...item} />}
				keyExtractor={({ id }) => String(id)}
			/>
		</>
	)
}
