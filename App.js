import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';

// import CompPadrao, {Comp1, Comp2} from './src/components/Multi'
// import Primeiro from'./src/components/Primeiro'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
// import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao';
// import Contador from './src/components/Contador';
// import Pai from './src/components/indireta/Pai'
// import ContadorV2 from './src/components/contador/ContadorV2';
// import Diferenciar from './src/components/Diferenciar';
// import ParImpar from './src/components/ParImpar';
// import Familia from './src/components/relacao/Familia';
// import Membro from './src/components/relacao/Membro';
// import UsuarioLogado from './src/components/UsuarioLogado';
// import ListaProdutos from './src/components/produtos/ListaProdutos';
// import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './src/components/DigiteSeuNome';
// import FlexBoxV1 from './src/components/layout/FlexBoxV1';
// import FlexBoxV2 from './src/components/layout/FlexBoxV2';
// import FlexBoxV3 from './src/components/layout/FlexBoxV3';
// import FlexBoxV4 from './src/components/layout/FlexBoxV4';
import Mega from './src/components/mega/Mega';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CompPadrao/>
      <Comp1/>
      <Comp2/>
      <Primeiro/> */}
      {/* <MinMax min={3} max={20}/>
      <MinMax min={1} max={94}/> */}
      {/* <Aleatorio min={30} max={35000}/>
      <Aleatorio min={30} max={35000}/>
      <Aleatorio min={30} max={35000}/>
      <Aleatorio min={30} max={35000}/> */}
      {/* <Titulo principal="Cadastro" secundario="Tela de cadastro" /> */}
      {/* <Botao /> */}
      {/* <Contador inicial={100} passo={13} />
      <Contador /> */}
      {/* <Pai /> */}
      {/* <ContadorV2 /> */}
      {/* <Diferenciar /> */}
      {/* <ParImpar num={3} /> */}
      {/* <Familia>
        <Membro nome={"VNT"} sobrenome={"Fibras"} />
        <Membro nome={"IPT"} sobrenome={"Fibras"} />
      </Familia>
      <Familia>
        <Membro nome={"Margot"} sobrenome={"França de Lara"} />
        <Membro nome={"Cristiano"} sobrenome={"Ronaldo"} />
      </Familia> */}
      {/* <UsuarioLogado usuario={ {nome: "Adriano", email: "dri@dri.com"} } />
      <UsuarioLogado usuario={ {nome: "Adriano"} } />
      <UsuarioLogado usuario={ {email: "motos@empresa.com"} } />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} /> */}
      {/* <ListaProdutos /> */}
      {/* <ListaProdutosV2 /> */}
      {/* <DigiteSeuNome /> */}
      {/* <FlexBoxV1 /> */}
      {/* <FlexBoxV2 /> */}
      {/* <FlexBoxV3 /> */}
      {/* <FlexBoxV4 /> */}

      <Mega qtdeNumeros={12} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  }
})