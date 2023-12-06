import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
            <Text style={CommonStyle.txtG}>Usuário Logado:</Text>
            <Text style={CommonStyle.txtG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}