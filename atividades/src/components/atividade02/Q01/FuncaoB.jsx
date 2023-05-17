import MinhaCor from './MeuContexto';

const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                (corers) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor: corers.bkgB}}>Função B</h1>
                        </div>
                    );
                }
            }
        </MinhaCor.Consumer>
    );
}

export default FuncaoB;