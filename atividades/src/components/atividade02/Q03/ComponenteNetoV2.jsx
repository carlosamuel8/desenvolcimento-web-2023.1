import './Q03.css'
import { useContext } from 'react';

import PokemonId from './MeuContexto';

const ComponenteNetoV2 = () => {
    const id = useContext(PokemonId) + 2

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon-${id}`}/>
        </div>
    );
}

export default ComponenteNetoV2;