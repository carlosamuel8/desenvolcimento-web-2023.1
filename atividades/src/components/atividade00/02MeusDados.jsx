import './atividade00.css';

const MeusDadosV2 = ({ nome, curso, universidade }) => {
    return (
        <div className="container">
            <div className="infos">
                <h1 className="nome">{nome}</h1>
                <h1 className="curso">{curso}</h1>
                <h1 className="universidade">{universidade}</h1>
            </div>
        </div>
    );    
}

export default MeusDadosV2;