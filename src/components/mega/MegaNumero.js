import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CommonStyle from '../estilo'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[CommonStyle.txtG, style.Num]}>{num}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        width: 50,
        height: 50,
        backgroundColor: "#000",
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        color: '#FFF',
    }
})