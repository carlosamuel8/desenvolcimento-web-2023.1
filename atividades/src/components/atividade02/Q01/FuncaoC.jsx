import { useContext } from 'react';

import FuncaoD from './FuncaoD';
import MinhaCor from './MeuContexto';

const FuncaoC = () => {
    const cores = useContext(MinhaCor);

    return (
        <div>
             <h1 style={{backgroundColor: cores.bkgC}}>Função C</h1>
            <FuncaoD />
        </div>
    );
}
export default FuncaoC;