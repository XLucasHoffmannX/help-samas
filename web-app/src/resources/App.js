import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { store } from '../store/store';
import Routes from '../Routes';

/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';

/* components */

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8257E5'
        }
    }
})

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </Provider>
    )
}

export default App;
