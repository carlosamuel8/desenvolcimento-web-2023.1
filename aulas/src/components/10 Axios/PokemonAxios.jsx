import './PokemonAxios.css'

import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonAxios = () => {

    const [id, setId] = useState(1);
    const [name, setName] = useState('')
    const [img01, setImg01] = useState('')
    const [img02, setImg02] = useState('')

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.data)
            .then(data => {
                setName(data.name);
                setImg01(data.sprites.front_default);
                setImg02(data.sprites.back_default);
            })
            .catch(error => console.log(error))
    }, [id]);

    const mudarPokemon = () => {
        setId(id + 1)
    }

    const voltarPokemon = () => {
        setId(id - 1)
    }

    return (
        <div className="pokemon-infos">
            <h2>{name}</h2>
            <div>
                <img src={`${img01}`} alt={`${name}-img01`} />
                <img src={`${img02}`} alt={`${name}-img02`} />
            </div>
            <button className="btn btn-retornar" onClick={voltarPokemon}>Voltar</button>
            <button className="btn btn-avancar" onClick={mudarPokemon}>Mudar</button>
        </div>
    );
}

export default PokemonAxios;