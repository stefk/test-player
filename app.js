import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {reduce} from './player/player'
import Wrapper from './wrapper.jsx'
import Player from './player/view.jsx'
import data from './data'

const container = document.querySelector('main')
const store = createStore(reduce, data)

ReactDOM.render(
  React.createElement(Wrapper, {store, data}, [Player]),
  container
)

