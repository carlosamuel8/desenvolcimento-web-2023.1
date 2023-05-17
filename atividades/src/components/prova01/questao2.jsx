import React, { useState } from 'react'

function Questao02() {
    const [virar, setVirar] = useState(false) // vai ser usado para alternar entre as imagens no botão
    const imagemFrente = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    const imagemCostas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'

    // a função alterna entre os estados true e false e seta o estado virar, que vai ser usado para alternar entre as imagens no botão
    const Clicagem = () => {
      setVirar(!virar)
    }

    return (
      <div>
          <h1>Questão 02</h1>
            <img src={virar ? imagemCostas : imagemFrente} alt="Imagem do melhor pokemon de todos, vulgo BULBASAUR" />
            {/* o botão alterna entre os estados true e false, e o true é a imagem de costas e o false é a imagem de frente */}
            <h3>o melhor pokemon de todos</h3>
          <button onClick={Clicagem}>{virar ? 'Ver  de frente' : 'Ver de trás'}</button>
      </div>
    )
}

export default Questao02
