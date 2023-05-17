import '../praticaRedux.css'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Imagem from './Imagem';
import BotaoIncrementar from './BotaoIncrementar';
import BotaoDecrementar from './BotaoDecrementar';
import BotaoIncrementarValor from './BotaoIncrementarValor';
import BotaoDecrementarValor from './BotaoDecrementarValor';

const TelaPrincipal = () => {
    const id = useSelector((state) => state.id.value);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                setName(response.data.name);
                setImage(response.data.sprites.front_shiny);
                setLoading(false);
            })
            .catch(error => {
                console.log(error); 
                setLoading(false)
            })
    }, [id]);

    const redenrizarImagem = () => {
        if (loading) {
            return (
                <h3>Carregando...</h3>
            );
        }
        return(
            <Imagem name={name} image={image} />
        );
    }

    return (
        <div className="pokemon-infos">
            {redenrizarImagem()}
            <div className="btn-panel">
                <BotaoDecrementar />
                <BotaoIncrementar />
                <BotaoDecrementarValor />
                <BotaoIncrementarValor />
            </div>
        </div>
    );
}

export default TelaPrincipal;