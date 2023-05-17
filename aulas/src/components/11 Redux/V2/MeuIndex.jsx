import { store } from './store/store';
import { Provider } from 'react-redux';
import TelaPrincipal from './TelaPrincipal';

const MeuIndex = () => {
    return (
        <>
            <Provider store={store}>
                <TelaPrincipal />
            </Provider>
        </>
    );
}

export default MeuIndex;