const Filho = ({ altura, peso }) => {
    const imc = peso/(altura**2);

    const analisaImc = (imc) => {
        if (imc < 18) {
            return 'Abaixo do peso';
        } else if (imc > 25 ) {
            return 'Acima do peso'
        } else {
            return 'Peso ideal'
        }
    }

    return (
        <>
            <h3>O imc do filho é {imc.toFixed(2)}, e ele está </h3>
            <h3>{analisaImc(imc)}</h3>
        </>
    );
}

export default Filho;