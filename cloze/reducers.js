import update from 'react-addons-update'
import {FILL_HOLE, SUBMIT_HOLES} from './actions'

function fill(state, holeId, text) {
  return update(state, {
    filledHoles: {$push: [{holeId, text}]}
  })
}

export function clozeQuestion(state, action) {
  if (state.question.id !== action.questionId) {
    return state
  }

  switch (action.type) {
    case FILL_HOLE:
      return fill(state, action.holeId, action.text)
    case SUBMIT_HOLES:
      return state
    default:
      return state
  }
}
