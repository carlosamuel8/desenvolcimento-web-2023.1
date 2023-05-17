const PlacaMae = ({nome, preco}) => {
    return `O produto ${nome} vale R$ ${preco}`;
}

const Memoria = ({nome, preco}) => {
    return `O produto ${nome} vale R$ ${preco}`;
}

const PlacaDeVideo = ({nome, preco}) => {
    return `O produto ${nome} vale R$ ${preco}`;
}

const MeuPc = () => {
    return (
        <>
            <PlacaMae nome="Placa Mãe" preco="500" /><br />
            <Memoria nome="Memória" preco="100" /><br />
            <PlacaDeVideo nome="Placa de Vídeo" preco="2000" />
        </>
    )
}

export default MeuPc;