import React from 'react';
import './App.css';

import Provider from 'store/Provider';
import Timer from 'components/Timer';
import { currentIntervalReducer } from 'reducers/CurrentIntervalReducer';
import CreateStore from 'store/CreateStore';
import { initialStateCurrentInterval } from 'reducers/CurrentIntervalReducer';

function App() {
  return (
    <Provider store={CreateStore(currentIntervalReducer, {
        ...initialStateCurrentInterval,
    })}>
        <Timer />
    </Provider>
  );
}

export default App;
