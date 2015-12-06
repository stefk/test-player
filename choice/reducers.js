import {SELECT_CHOICE, SUBMIT_ANSWER} from './actions.js'

const initial = {
  question: null,
  choiceId: null,
  enableChoice: true,
  enableSubmit: false
}

export function choiceQuestion(state = initial, action) {
  switch (action.type) {
    case SELECT_CHOICE:
      let newState = {}
 
      if (state.enableChoice) {
        newState.choiceId = action.choiceId
      }

      if (!state.enableSubmit) {
        newState.enableSubmit = true
      }

      return Object.assign({}, state, newState)
    case SUBMIT_ANSWER:
      return Object.assign({}, state, {
        enableChoice: false,
        enableSubmit: false
      })
    default:
      return state
  }
}

