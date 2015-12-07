import {SELECT_CHOICE, SUBMIT_ANSWER} from './actions.js'

export function choiceQuestion(state, action) {
  switch (action.type) {
    case SELECT_CHOICE:
      let newState = {}

      if (state.enableChoice) {
        if (state.question.multiple) {
          if (action.isSelected) {
            newState.selectedIds = [
              ...state.selectedIds,
              action.choiceId
            ]
          } else {
            let index = state.selectedIds.indexOf(action.choiceId)
            newState.selectedIds = [
              ...state.selectedIds.slice(0, index),
              ...state.selectedIds.slice(index + 1)
            ]
          }
        } else {
          newState.selectedIds = action.isSelected ?
           [action.choiceId] :
           []
        }
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

