import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchAllProjects } from './actions/projects';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);
let hasRendered = false;

const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(fetchAllProjects()).then(() => {
  renderApp();
});
