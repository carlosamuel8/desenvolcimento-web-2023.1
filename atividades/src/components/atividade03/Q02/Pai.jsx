import '../Atividade03.css'

import { useState } from 'react';
import { FilhoA, FilhoB, FilhoC } from './Filhos';

const Pai = () => {

    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);
    const [media, setMedia] = useState(0);

    const valores = [5, 6, 7, 8, 9];

    const realizarCalculo = ([calculo, valor]) => {
        if (calculo === 'maior') {
            setMaior(valor)
        } else if (calculo === 'menor') {
            setMenor(valor)
        } else if (calculo === 'media'){
            setMedia(valor)
        }
    }

    return (
        <div>
            <h3>Cálculo Vetor</h3>
            <p>Valores de entrada: {'[' + valores.join(', ') + ']'}</p>
            <div className="resultados">
                <p>Maior: {maior}</p>
                <p>Menor: {menor}</p>
                <p>Média: {media}</p>
            </div>
            <div className="btn">
                <FilhoA valores={valores} realizarCalculo={realizarCalculo}/>
                <FilhoB valores={valores} realizarCalculo={realizarCalculo}/>
                <FilhoC valores={valores} realizarCalculo={realizarCalculo}/>
            </div>
        </div>
    );
}

export default Pai;