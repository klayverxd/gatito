import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import styles from './styles.js'

export default function Item({ nome, preco, descricao }) {
	return (
		<>
			<View style={styles.informacao}>
				<Text style={styles.nome}>{nome}</Text>
				<Text style={styles.descricao}>{descricao}</Text>
				<Text style={styles.preco}>{preco}</Text>
			</View>
			<View style={styles.carrinho}>
				<View style={styles.valor}>
					<Text style={styles.descricao}>Quantidade</Text>
					<TextInput value="0" />
				</View>
				<View style={styles.valor}>
					<Text style={styles.descricao}>Preço:</Text>
					<Text style={styles.preco}>0</Text>
				</View>
				<Button style={styles.botao}>ss</Button>
			</View>
		</>
	)
}
