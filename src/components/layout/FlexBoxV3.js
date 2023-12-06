import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CommonStyle from '../estilo'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color='#ff801a' />
            <Quadrado color='#50d1f6' />
            <Quadrado color='#dd22c1' />
            <Quadrado color='#8312ed' />
            <Quadrado color='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#fff'
    }
})