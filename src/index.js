import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import smoothscroll from 'smoothscroll-polyfill'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import makeStore from './store'
import App from './app'

const store = makeStore()
smoothscroll.polyfill()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
