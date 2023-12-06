import React from "react"
import { View, Text } from 'react-native'
import CommonStyle from './estilo'

export default props => {
    return (
        <>
            <Text style={CommonStyle.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}