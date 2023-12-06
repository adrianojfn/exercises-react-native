import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from '../estilo'

import produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>{p.id}) {p.nome} custa R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={CommonStyle.txtG}>Lista de produtos</Text>
            {obterLista()}
        </>
    )
}