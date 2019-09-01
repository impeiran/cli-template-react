import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home/Home'

import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
