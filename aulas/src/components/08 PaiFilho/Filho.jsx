const Filho = ({ mesada, enviarMensagemProPai }) => {

    const agradecer = () => {
        enviarMensagemProPai(`Valeu pelos ${mesada}, coroa!`)
    }

    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {mesada}</h3>
            <button 
                style={{width: '80px', height: '40px', background: 'green', color: 'white', fontWeight: 'bold', border: 'none', marginTop: '10px'}} 
                onClick={agradecer}
            >
                Agradecer
            </button>
        </>
    );
}

export default Filho;