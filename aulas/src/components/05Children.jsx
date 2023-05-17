import { Children, cloneElement } from 'react';

//V0:
// const Supermercado = (props) => {
//     return (
//         <div>
//             <h1>Supermercado {props.nome}</h1>
//             {props.children}
//         </div>
//     );
// }

//V1:
// const Supermercado = ({children, nome}) => {
//     return (
//         <div style={{display: 'flex', alignItems: 'center', flexDirection:'column'}}>
//             <h1>Supermercado {nome}</h1>
//             {Children.map(
//                 children,
//                 (child) => {
//                     return (
//                         <div style={{backgroundColor: 'red', color: '#fff'}}>
//                             {child}
//                         </div>
//                     );
//                 }
//             )}
//         </div>
//     );
// }

//V2:
const Supermercado = ({children, nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {Children.map(
                children,
                (child) => {
                    return (
                        cloneElement(child, {supermercado: nome})
                    );
                }
            )}
        </div>
    );
}

const Legume = ({nome, supermercado}) => {
    return (
        <div>
            <h3>Legume {nome} do Supermercado {supermercado}</h3>
        </div>
    );
}

const Bebidas = ({nome, supermercado}) => {
    return (
        <div>
            <h3>Bebida {nome} do Supermercado {supermercado}</h3>
        </div>
    );
}

export {Supermercado, Legume, Bebidas};