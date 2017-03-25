import { createStore } from 'redux';

import rootReducer from './reducers';

export default(initialState) => createStore(rootReducer, initialState);
