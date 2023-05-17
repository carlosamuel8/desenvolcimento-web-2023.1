import { useDispatch, useSelector } from 'react-redux';
import { incrementarValor } from './slice/idSlice';

const BotaoIncrementarValor = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.id.value) + 10;
    const valor = 10;

    return (
        <>
            <button onClick={() => {id > 905 ? alert('Não é possível incrementar') : dispatch(incrementarValor(valor))}} className="btn btn-avancar">Incrementar + {valor}</button>
        </>
    );
}

export default BotaoIncrementarValor;