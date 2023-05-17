import { useState, useEffect } from "react"

function Questao03() {
    // variáveis de estado que armazenam as capitais de maior e menor população
    const [capitalMaiorPop, setCapitalMaiorPop] = useState("") // 
    const [capitalMenorPop, setCapitalMenorPop] = useState("")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )

        .then(
            (data) => {
                let maiorPop = 0
                let menorPop = 9999999999 // boto um valor bem alto pra garantir que vai ser menor que qualquer população
                let maiorPopIndex = 0
                let menorPopIndex = 0

                for (let i = 0; i < data.length; i++) {
                    // percorre o vetor data e compara a população de cada país com a maior e menor população
                    // se a população do país for maior que a maior população, a maior população recebe a população do país
                    // se a população do país for menor que a menor população, a menor população recebe a população do país
                    if (data[i].population > maiorPop) {
                        maiorPop = data[i].population
                        maiorPopIndex = i
                    }
                    if (data[i].population < menorPop) {
                        menorPop = data[i].population
                        menorPopIndex = i
                    }
                }
                // alimenta as variáveis de estado com as capitais de maior e menor população
                setCapitalMaiorPop(data[maiorPopIndex].capital)
                setCapitalMenorPop(data[menorPopIndex].capital)
            }
        )
        
        .catch((error) => console.log(error))
    }, 
    [])

    return (
        <div>
            <h1>Questão 03</h1>
            <h2>Maior população: {capitalMaiorPop}</h2>
            <h2>Menor população: {capitalMenorPop}</h2>
        </div>
    )
}

export default Questao03