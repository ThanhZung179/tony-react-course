import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; // global css
import { AppProvider } from './context/AppContext';

// styles
import 'carbon-components/css/carbon-components.min.css';
// import './app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App />
    </AppProvider>
)

