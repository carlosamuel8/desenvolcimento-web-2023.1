import { useDispatch, useSelector } from 'react-redux';
import { incrementar } from './slice/idSlice';

const BotaoIncrementar = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.id.value);
    return (
        <>
            <button 
                onClick={() => {id >= 905 ? alert('Não é possível incrementar') : dispatch(incrementar())}} 
                className="btn btn-avancar"
            >
                Incrementar
            </button>
        </>
    );
}

export default BotaoIncrementar;