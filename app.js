import React from 'react'
import ReactDOM from 'react-dom'
import {store, dispatch} from './store'
import Player from './player/view.jsx'
import Choices from './choice/view.jsx'

const container = document.querySelector('main')

function render() {
  const state = store.getState()
  console.log('Rendering...', state)
  ReactDOM.render(
    React.createElement(Player, state),
    container
  )
}

store.subscribe(render)
render()
