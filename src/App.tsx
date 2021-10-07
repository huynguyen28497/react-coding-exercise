import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from 'redux/stores';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
