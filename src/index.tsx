// Libs
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './components/App'

// Styles
import './index.scss'

// Redux
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
