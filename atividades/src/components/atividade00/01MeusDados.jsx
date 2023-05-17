import React from 'react';
import './atividade00.css';

// V1:
// function MeusDadosV1() {
//     return (
//         <div className="container">
//             <div className="infos">
//                 <h1 className="nome">Francisco Breno da Silveira</h1>
//                 <h1 className="curso">Ciência da Computação</h1>
//                 <h1 className="universidade">Universidade Federal do Ceará (UFC) - Campus Quixadá</h1>
//             </div>
//         </div>
//     );
// }


// V2:
// const MeusDadosV1 = () => {
//     return (
//         <div className="container">
//             <div className="infos">
//                 <h1 className="nome">Francisco Breno da Silveira</h1>
//                 <h1 className="curso">Ciência da Computação</h1>
//                 <h1 className="universidade">Universidade Federal do Ceará (UFC) - Campus Quixadá</h1>
//             </div>
//         </div>
//     );    
// }

// V3:
// const MeusDadosV1 = () => {
//     <div className="container">
//         <div className="infos">
//             <h1 className="nome">Francisco Breno da Silveira</h1>
//             <h1 className="curso">Ciência da Computação</h1>
//             <h1 className="universidade">Universidade Federal do Ceará (UFC) - Campus Quixadá</h1>
//         </div>
//     </div>
// }

// V4: 
class MeusDadosV1 extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="infos">
                    <h1 className="nome">Francisco Breno da Silveira</h1>
                    <h1 className="curso">Ciência da Computação</h1>
                    <h1 className="universidade">Universidade Federal do Ceará (UFC) - Campus Quixadá</h1>
                </div>
            </div>
        );
    }
}

export default MeusDadosV1;