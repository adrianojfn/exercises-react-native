import React, {useState} from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import CommonStyle from '../estilo'

export default props => {
    const [num, setNum] = useState('')
    const [texto, setTexto] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={CommonStyle.txtG}>{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}