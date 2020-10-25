import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlware from 'redux-saga';
import reducer from './reducers';
import getItem from './sagas/getItem';

const sagaMiddleware = createSagaMiddlware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(getItem);

export default store;
