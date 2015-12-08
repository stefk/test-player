import invariant from 'invariant'
import update from 'react-addons-update'
import {
  SELECT_CHOICE,
  DESELECT_CHOICE,
  SUBMIT_ANSWER
} from './actions'

function select(state, choiceId) {
  invariant(
    state.enableChoice,
    'Choice selection disabled for question %s',
    state.question.id
  )

  if (state.question.multiple) {
    return update(state, {
      selectedIds: {$push: [choiceId]},
      enableSubmit: {$set: true}
    })
  }

  return update(state, {
    selectedIds: {$set: [choiceId]},
    enableSubmit: {$set: true}
  })
}

function deselect(state, choiceId) {
  invariant(
    state.enableChoice,
    'Choice deselection disabled for question %s',
    state.question.id
  )

  if (state.question.multiple) {
    return update(state, {
      selectedIds: {
        $splice: [[state.selectedIds.indexOf(choiceId), 1]]
      },
      enableSubmit: {$set: state.selectedIds.length > 1}
    })
  }

  return update(state, {
    selectedIds: {$set: []},
    enableSubmit: {$set: false}
  })
}

function submit(state) {
  invariant(
    state.enableSubmit,
    'Answer submission disabled for question %s',
    state.question.id
  )

  return update(state, {
    enableChoice: {$set: false},
    enableSubmit: {$set: false}
  })
}

export function choiceQuestion(state, action) {
  if (state.question.id !== action.questionId) {
    return state
  }

  switch (action.type) {
    case SELECT_CHOICE:
      return select(state, action.choiceId)
    case DESELECT_CHOICE:
      return deselect(state, action.choiceId)
    case SUBMIT_ANSWER:
      return submit(state)
    default:
      return state
  }
}

