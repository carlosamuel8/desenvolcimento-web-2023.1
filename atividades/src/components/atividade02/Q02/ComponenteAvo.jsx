import PokemonId from './MeuContexto';

import ComponenteFilho from './ComponenteFilho';

const ComponenteAvo = () => {
    const id = 1;
    return (
        <PokemonId.Provider value={id}>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon-${id}`}/>
                <ComponenteFilho />
            </div>
        </PokemonId.Provider>
    );
}

export default ComponenteAvo;