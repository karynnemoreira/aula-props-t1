//PROPS: ABREVIAÇÃO DE PROPRIEDADES. EM REACT, SÃO UMA FORMA DE PASSAR DADOS DE UM COMPONENTE PAI PARA UM COMPONENTE FILHO NO MESMO REACT. 

//PARA QUE SERVE O PROPS?
//REUTILIZAÇÃO DE COMPONENTES; COMUNICAÇÃO ENTRE COMPONENTES; CUSTOMIZAÇÃO E CONFIGURAÇÃO

import React from "react"
import ComponenteComProps from "./ComponenteComProps.jsx"

import Dani from "./assets/dani.png"
import Debora from "./assets/debora.png"
import Grazi from "./assets/grazi.png"
import Carol from "./assets/carol.png"

function App() {
  return (
    <>
  <ComponenteComProps nome="Débora"idade="21 anos"email="debora@email.com"imagem={Debora}> 
  <h3> Estou cansada </h3>
  </ComponenteComProps>

      <ComponenteComProps
        nome="Graziele"
        idade="19 anos"
        email="grazi@email.com"
        imagem={Grazi}> 

       <h2> Amo pizza com coca-cola </h2>

        </ComponenteComProps>
      


      <ComponenteComProps 
      nome="Danielle" 
      idade="17anos" 
      email="dani@email.com" 
      imagem={Dani} 
      />

      <ComponenteComProps
        nome="Carol"
        idade="20 anos"
        email="carol@email.com"
        imagem={Carol} />



    </>

  )
}

export default App