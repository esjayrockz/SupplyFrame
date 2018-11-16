import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import projectsReducer from '../reducers/projects';
import usersReducer from '../reducers/users';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating Redux store
export default () => {
  const store = createStore(combineReducers({
    projects: projectsReducer,
    users: usersReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//for Chrome devtools
  );
  return store;
};
