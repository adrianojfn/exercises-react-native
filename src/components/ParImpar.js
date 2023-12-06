import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from './estilo'

export default ({num = 0}) => {
        return (
            <View>
                <Text style={CommonStyle.txtG}>O resultado é: </Text>
                {num % 2 === 0
                    ? <Text style={CommonStyle.txtG}>Par</Text>
                    : <Text style={CommonStyle.txtG}>Impar</Text>
                }
            </View>
        )
}