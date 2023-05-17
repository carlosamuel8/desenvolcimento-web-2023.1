import { useState } from 'react';

const Contador = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Contador: {count}</h1>
            <button onClick={incrementar}>Contar +1</button>
        </>
    );
}

export default Contador;