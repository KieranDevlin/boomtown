import AppRoutes from './routes';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './apollo';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core/';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
/**
 * @TODO: Add Routing
 *
 * Uncomment the following line when your routes are configured
 *
 *
 * Below in your <App />, nest your <AppRoutes /> inside of <BrowserRouter />
 * component to enable routing in your client app.
 */

/**
 * @TODO: Wrap your app with the Item Preview Provider
 *
 * import ItemPreviewProvider from './context/ItemPreviewProvider'
 *
 * Wrap this component around your app to access Item Preview Context API.
 */

/**
 * @TODO: Wrap your app with the Viewer Context
 *
 * import ViewerProvider from './context/ViewerProvider'
 *
 * Below in your <App />, wrap the <ViewerProvider /> component around
 * the <BrowserRouter /> component so the router is aware of whether a
 * user is currently logged in and who that user is.
 */

import './index.css';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <ApolloProvider client={client}>
        <Router>
          <AppRoutes />
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
