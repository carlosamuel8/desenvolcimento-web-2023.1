import { useDispatch, useSelector } from 'react-redux';
import { decrementar } from './slice/idSlice';

const BotaoDecrementar = () => {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.id.value);

    return (
        <>
            <button 
                onClick={() => { id < 0 ? alert('Não é possível decrementar') : dispatch(decrementar()) }} 
                className="btn btn-retornar"
            >
                Decrementar
            </button>
        </>
    );
}

export default BotaoDecrementar;