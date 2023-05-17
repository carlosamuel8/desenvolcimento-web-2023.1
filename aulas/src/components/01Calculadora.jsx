const Calculadora = () => {
    
    function somar(x, y) {
        return x + y;
    }

    const subtrair = (x, y) => {
        return x - y;
    }

    const multiplicar = (x, y) => x * y;

    const dividir = (x, y) => x / y; 

    const chamarDividir = (funcaoDeDivisao) => {
        return funcaoDeDivisao(10, 5);
    }
    
    return (
        <div>
            <h2>A soma dos números é: {somar(10,5)}</h2>
            <h2>A subtração dos números é: {subtrair(10,5)}</h2>
            <h2>A multiplicação dos números é: {multiplicar(10,5)}</h2>
            <h2>A divisão dos números é: {chamarDividir(dividir)}</h2>
        </div>
    );
}

export default Calculadora;