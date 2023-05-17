import MinhaCor from './MeuContexto';
import { useContext } from 'react';

const FuncaoD = () => {
    const cores = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{backgroundColor: cores.bkgD}}>Função D</h1>
        </div>
    );
}

export default FuncaoD;