import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseContext from './context/firebase'
import { firebase, FieldValue } from './lib/firebase'
import './styles/app.css'
import './styles/style.css'
import 'react-multi-carousel/lib/styles.css'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
