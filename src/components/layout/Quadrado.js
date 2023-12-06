import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from '../estilo'

export default props => {
    const lado = 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }}>

        </View>
    )
}
