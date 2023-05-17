import React from 'react';
// V0:
// function HelloWorld() {
//     return <h2>Algum Nome</h2>;
// }


//V1:
// const HelloWorld = () => {
//     return <h2>Algum Nome</h2>;
// };

//V2:
// const HelloWorld = () => 
//     <div>
//         <h2>Algum nome</h2>
//     </div>

//V3:
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h2>Algum nome com classe</h2>
            </div>
        );
    }
}

export default HelloWorld;