import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'; // global css
import { AppProvider } from './context/AppContext';

// styles
import 'carbon-components/css/carbon-components.min.css';
// import './app.scss';

// store
import store from './stores';

// ErrorBoundaries
import ErrorBoundaries from './components/ErrorBoundaries.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <AppProvider>
                <ErrorBoundaries>
                    <App />
                </ErrorBoundaries>
            </AppProvider>
        </Provider>
    </BrowserRouter>
   
)

