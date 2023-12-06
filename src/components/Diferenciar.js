import React from 'react'
import { Platform, Text } from 'react-native'
import CommonStyle from './estilo'

export default props => {
    if (Platform.OS === 'android') {
        return <Text style={CommonStyle.txtG}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={CommonStyle.txtG}>iOS</Text>
    } else {
        return <Text style={CommonStyle.txtG}>Eita!</Text>
    }
}