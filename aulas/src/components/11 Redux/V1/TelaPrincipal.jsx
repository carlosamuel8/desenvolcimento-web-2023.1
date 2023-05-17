import '../praticaRedux.css'

import { useState } from 'react';
import Imagem from './Imagem';
import BotaoIncrementar from './BotaoIncrementar';
import BotaoDecrementar from './BotaoDecrementar';

const TelaPrincipal = () => {
    const [id, setId] = useState(50);

    const incrementar = () => {
        setId(prev => prev + 1)
    }

    const decrementar = () => {
        setId(prev => prev === 0 ? prev : prev - 1)
    }

    return (
        <div className="pokemon-infos">
            <Imagem id={id}/>
            <BotaoDecrementar decrementar={decrementar} />
            <BotaoIncrementar incrementar={incrementar} />
        </div>
    );
}

export default TelaPrincipal;