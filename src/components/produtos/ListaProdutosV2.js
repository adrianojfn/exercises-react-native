import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CommonStyle from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={CommonStyle.txtG}>Lista de produtos V2</Text>
            <FlatList 
                data={produtos} 
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}