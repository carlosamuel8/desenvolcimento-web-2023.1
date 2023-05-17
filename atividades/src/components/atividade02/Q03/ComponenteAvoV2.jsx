import './Q03.css'

import { useState } from 'react';

import PokemonId from './MeuContexto';

import ComponenteFilhoV2 from './ComponenteFilhoV2';

const ComponenteAvoV2 = () => {
    const [contador, setContador] = useState(1);

    return (
        <PokemonId.Provider value={contador}>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt={`pokemon-${contador}`}/>
                <ComponenteFilhoV2 />
            </div>
            <button 
 
                onClick={() => setContador(contador + 1)}
            >
                Click
            </button>
        </PokemonId.Provider>
    );
}

export default ComponenteAvoV2;