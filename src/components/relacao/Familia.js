import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from '../estilo'
import Membro from './Membro'

export default props => {
    return (
        <>
            <Text>Membros da Família:</Text>
            {props.children}
        </>
    )
}