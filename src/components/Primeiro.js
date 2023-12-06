import React from "react";
import { Text } from "react-native";
import CommonStyle from './estilo'


export default () => {
    console.warn("Opa!")
    return (
        <Text style={CommonStyle.txtG}>Primeiro!</Text>
    )
}