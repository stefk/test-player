import React from 'react'
import ReactDOM from 'react-dom'
import {store, dispatch} from './store'
import Choices from './choice/view.jsx'


import Player from './player/view.jsx'

let container = document.querySelector('main')

function render() {
  var state = store.getState()
  console.log('Rendering...', state)
  ReactDOM.render(
    React.createElement(Player, state),
    container
  )
}

store.subscribe(render)
render()
