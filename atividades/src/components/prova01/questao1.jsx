import React, { useState, useEffect } from "react"

function Questao01X() {
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 7, ap2:7 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ]

    const [medias, setMedias] = useState([]) 
    const [loading, setLoading] = useState(true) // uso para forçar o carregamento da página ao receber e vetor de médias de Questao01Y.
   
    // função que recebe o vetor de médias de Questao01Y e seta o vetor de médias no componente pai
    const setMediasFromFilho = (medias) => {
        setMedias(medias) // seta o vetor de médias
        setLoading(false) // quando o vetor de médias for recebido, o loading é setado para false.
    }

        
    const RenderizarAlunosAcimaDaMedia = () => {
        // filtra os alunos com média superior ou igual a 7.0
        const alunosAcimaDaMedia = alunos.filter((aluno, index) => {
            return medias[index] >= 7.0
        })
        // retorna um vetor de JSX com os nomes e médias dos alunos acima da média
        return alunosAcimaDaMedia.map((aluno) => {
            // retornar com um tab entre a=nome e a média
            return <p>{aluno.nome} - {medias[alunos.indexOf(aluno)]}</p>
        })
    }

    return (
        <div>
            <h1>Questão 01</h1>
            <h3>Alunos        Média</h3>
            <Questao01Y alunos={alunos} setMediasFromFilho={setMediasFromFilho} />
            {/* se o loading for true, imprime "Carregando...", se não, imprime o vetor de alunos acima da média. */}
            {loading ? <p>Carregando...</p> : RenderizarAlunosAcimaDaMedia()} 
        </div>
    )
}

const Questao01Y = (props) => {
    const { alunos, setMediasFromFilho } = props

    // calcula as médias dos alunos, usando o vetor de alunos recebido por props
    useEffect(() => {
        const medias = alunos.map((aluno) => {
            return (aluno.notas.ap1 + aluno.notas.ap2) / 2
        })

            setMediasFromFilho(medias) // seta o vetor de médias no componente pai
    }, 
    [alunos, setMediasFromFilho])

    // não retorna nada, apenas seta o vetor de médias
}

export default Questao01X
