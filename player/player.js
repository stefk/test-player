import React from 'react'
import ReactDOM from 'react-dom'
import invariant from 'invariant'
import zipObject from 'lodash/array/zipObject'
import {startQuiz} from './actions'
import {reduce} from './reducer'
import Player from './view.jsx'
import choice from './../choice/definition'
import cloze from './../cloze/definition'

let dispatch = () => {
  throw new Error('"dispatch()" function missing or not initialized')
}

const questionHandlers = zipObject([choice, cloze].map(
  handler => [handler.type, handler]
))

function getHandler(question) {
  invariant(
    question.hasOwnProperty('type'),
    'Question must have a "type" property'
  )

  invariant(
    typeof questionHandlers[question.type] !== undefined,
    'Cannot resolve unknown question type "%s"',
    question.type
  )

  return questionHandlers[question.type]
}

function render(container, state) {
  console.log('Rendering player with state:', state)
  ReactDOM.render(
    React.createElement(Player, state),
    container
  )
}

function init(quizData, dispatchFunction) {
  dispatch = dispatchFunction
  dispatch(startQuiz(quizData))
}

export {
  init,
  render,
  reduce,
  dispatch,
  getHandler
}
