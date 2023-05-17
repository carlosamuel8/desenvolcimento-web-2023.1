import '../Atividade03.css'
import { useEffect, useState } from 'react';

const Cidades = () => {

    const [votosCidade, setVotosCidade] = useState({
        'Fortaleza': 0,
        'Quixadá': 0,
        'Acaraú': 0,
        'Cruz': 0
    });

    const [maisMenosVotadas, setMaisMenosVotadas] = useState([]);

    useEffect(() => {
        const arrayOrdenado = Object.entries(votosCidade).sort((a, b) => a[1] - b[1])
        setMaisMenosVotadas([arrayOrdenado[3][0], arrayOrdenado[0][0]]);
    }, [votosCidade]);

    const incrementar = (chave) => {
        let cidade = {...votosCidade};
        cidade[chave] += 1; 
        setVotosCidade(cidade)
    }

    return (
        <div>
            <h3>Votação de cidades</h3>
            <div className="cidades">
                <h4>Fortaleza: {votosCidade.Fortaleza}</h4>
                <h4>Quixadá: {votosCidade.Quixadá}</h4>
                <h4>Acaraú: {votosCidade.Acaraú}</h4>
                <h4>Cruz: {votosCidade.Cruz}</h4>
            </div>
            <div className="btn">
                <button onClick={() => incrementar('Fortaleza')}>Votar Fortaleza</button>
                <button onClick={() => incrementar('Quixadá')}>Votar Quixadá</button>
                <button onClick={() => incrementar('Acaraú')}>Votar Acaraú</button>
                <button onClick={() => incrementar('Cruz')}>Votar Cruz</button>
            </div>
            <div className="votos">
                <p>Cidade mais votada: {maisMenosVotadas[0]}</p>
                <p>Cidade menos votada: {maisMenosVotadas[1]}</p>
            </div>
        </div>
    );
}

export default Cidades;