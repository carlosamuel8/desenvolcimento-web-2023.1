const Imagem = ({ id }) => {
    return (
        <div>
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} 
            />
        </div>
    );
}

export default Imagem;