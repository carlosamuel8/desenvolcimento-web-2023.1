import './Q03.css'
import { useContext } from 'react';

import PokemonId from './MeuContexto';

import ComponenteNetoV2 from './ComponenteNetoV2';

const ComponenteFilhoV2 = () => {
    const id = useContext(PokemonId) + 1

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon-${id}`}/>
            <ComponenteNetoV2 />
        </div>
    );
}

export default ComponenteFilhoV2;