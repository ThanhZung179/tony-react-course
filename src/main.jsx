import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.css'; // global css
import { AppProvider } from './context/AppContext';

// styles
import 'carbon-components/css/carbon-components.min.css';
// import './app.scss';

// store
import store from './stores';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>
)

