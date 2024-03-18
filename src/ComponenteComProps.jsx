import React from "react"
import styled from "styled-components"

const Card = styled.div`
    border: solid red;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 20%;
`


function ComponenteComProps({ nome, idade, email, imagem, children}) {
    return (
        <Card>
            <h2> Cadastro:  </h2>
            <p> Nome: {nome} </p>
            <p> Idade: {idade} </p>
            <p> Email: {email} </p>
            <Img src={imagem} alt="" />
      {children}
        </Card>
    )
}

export default ComponenteComProps