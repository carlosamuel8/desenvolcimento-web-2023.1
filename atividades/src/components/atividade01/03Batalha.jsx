import './03Batalha.css'
import { Children, cloneElement } from 'react';

const Hero = ({nome, gif}) => {
    return (
        <div className="hero">
            <h2>Hero: {nome}</h2>
            <iframe src={gif} title={`${nome}-gif`} width="480" height="480" className="giphy-embed" allowFullScreen></iframe>
        </div>
    );
}

const Enemy = ({nome, gif}) => {
    return (
        <div className="enemy">
            <h2>Enemy: {nome}</h2>
            <iframe src={gif} title={`${nome}-gif`} width="480" height="480" className="giphy-embed" allowFullScreen></iframe>
        </div>
    );
}

const Arena = () => {
    return (
        <div className="arena">
            <div>
                <Hero nome="Anya" gif="https://giphy.com/embed/zZC2AqB84z7zFnlkbF" />
                <h2>VS</h2>
                <Enemy nome="Saitama" gif="https://giphy.com/embed/6IkjQmpaRwIabJ2G3C" />
            </div>
            <div>
                <Hero nome="Anya" gif="https://giphy.com/embed/zZC2AqB84z7zFnlkbF" />
                <h2>Wins!!!</h2>
            </div>
        </div>
    );
}

const World = ({children ,nome}) => {
    return (
        <div className="world">
            <h1>{nome}</h1>
            {Children.map(
                children,
                (child) => {
                    return (
                        cloneElement(child)
                    );
                }
            )}
        </div>
    );
}

export {World, Arena};