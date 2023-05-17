import FuncaoB from './FuncaoB';
import FuncaoC from './FuncaoC';
import MinhaCor from './MeuContexto';

const FuncaoA = () => {
    const cores = {bkgA: 'green', bkgB: 'white', bkgC: 'yellow', bkgD:'blue'};

    return (
        <MinhaCor.Provider value={cores}>
            <div>
                <h1 style={{backgroundColor: cores.bkgA}}>Funcação A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    );
}

export default FuncaoA;