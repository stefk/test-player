import React from 'react'
import ReactDOM from 'react-dom'
import {INIT_PLAYER} from './actions'
import Player from './view.jsx'
import {resolve} from './../resolver'

let dispatch = () => {
  throw new Error('Player is not initialized')
}

export function render(container, state) {
  console.log('Rendering player with state:', state)
  ReactDOM.render(
    React.createElement(Player, state),
    container
  )
}

export function reduce(state, action) {
  switch (action.type) {
    case INIT_PLAYER:
      dispatch = action.dispatch

      return {
        title: action.data.title,
        questions: action.data.questions.map(question =>
          resolve(question.question).reducer(question, action)
        )
      }
    default:
      return {
        title: state.title,
        questions: state.questions.map(question =>
          resolve(question.question).reducer(question, action)
        )
      }
  }
}

export {dispatch}
