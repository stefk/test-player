import invariant from 'invariant'
import update from 'react-addons-update'
import {FILL_HOLE, SUBMIT_HOLES} from './actions'

function fill(state, holeId, text) {
  invariant(
    state.enableFill,
    'Answer edition is not enabled for question "%s"',
    state.question.id
  )

  const holeIndex = state.filledHoles.findIndex(hole =>
    hole.id === holeId
  )
  const newState = update(state, {
    filledHoles: {[holeIndex]: {text: {$set: text}}}
  })
  const enableSubmit = newState.filledHoles.reduce(
    (enabled, hole) => enabled && hole.text !== '',
    true
  )

  return enableSubmit !== newState.enableSubmit ?
    update(newState, {enableSubmit: {$set: enableSubmit}}) :
    newState
}

function submit(state) {
  invariant(
    state.enableSubmit,
    'Answer submission is not enabled for question "%s"',
    state.question.id
  )

  return update(state, {
    enableFill: {$set: false},
    enableSubmit: {$set: false}
  })
}

export function reduce(state, action) {
  if (state.question.id !== action.questionId) {
    return state
  }

  switch (action.type) {
    case FILL_HOLE:
      return fill(state, action.holeId, action.text)
    case SUBMIT_HOLES:
      return submit(state)
    default:
      return state
  }
}
