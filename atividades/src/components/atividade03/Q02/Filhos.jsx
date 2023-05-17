const FilhoA = ({ valores, realizarCalculo }) => {
    
    const maiorValor = () => {
        realizarCalculo(['maior', Math.max(...valores)])
    }
    
    return (<button onClick={maiorValor}>Calcular maior valor</button>);
}

const FilhoB = ({ valores, realizarCalculo }) => {

    const menorValor = () => {
        realizarCalculo(['menor', Math.min(...valores)])
    }

    return (<button onClick={menorValor}>Calcular menor valor</button>);
}

const FilhoC = ({ valores, realizarCalculo }) => {

    const mediaDosValores = () => {
        const somaValores = valores.reduce((acc, valor) => acc + valor, 0)

        realizarCalculo(['media', (somaValores/valores.length)])
    }

    return (<button onClick={mediaDosValores}>Calcular média</button>);
}

export {FilhoA, FilhoB, FilhoC};