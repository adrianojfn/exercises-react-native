import React from 'react'
import { Text } from 'react-native'
import CommonStyle from './estilo'

export default ( {min, max} ) => {
    const aleatorio = parseInt(Math.random() * (min, max)) + min;
    return (
        <Text style={CommonStyle.txtG}>
            Valor aleatório {aleatorio}
        </Text>
    )
}