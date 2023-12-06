import React from 'react'
import { Text } from 'react-native'
import CommonStyle from './estilo'

export default (props) => {
    // console.warn(props)
    return (
        <Text style={CommonStyle.txtG}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}