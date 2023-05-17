import { useDispatch, useSelector } from 'react-redux';
import { decrementarValor } from './slice/idSlice';

const BotaoDecrementarValor = () => {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.id.value) - 10;
    const valor = 10;

    return (
        <>
            <button 
                onClick={() => {id < 0 ? alert('Não é possível decrementar') : dispatch(decrementarValor(valor))}} 
                className="btn btn-retornar"
            >
                Decrementar - {valor}
            </button>
        </>
    );
}

export default BotaoDecrementarValor;