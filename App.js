import React from 'react'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import TelaPadrao from './src/components/TelaPadrao'
import Routes from './src/routes'

export default function App() {
  console.log('aqui')
  return (
    <TelaPadrao>
      <Routes />
    </TelaPadrao>
  )
}
