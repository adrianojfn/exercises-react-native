import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={props.inc}></Button>
            <Button title="-" onPress={props.dec}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 300,
        justifyContent: 'center'
    },
})