import { useContext } from 'react';

import PokemonId from './MeuContexto';

import ComponenteNeto from './ComponenteNeto';

const ComponenteFilho = () => {
    const id = useContext(PokemonId) + 1

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon-${id}`}/>
            <ComponenteNeto />
        </div>
    );
}

export default ComponenteFilho;