import invariant from 'invariant'
import update from 'react-addons-update'
import {
  SELECT_CHOICE,
  DESELECT_CHOICE,
  SUBMIT_ANSWER
} from './actions'

function assertSelectionEnabled(state, questionId) {
/*  var enabled = state.questions.some(question =>
    question.question.id === questionId && question.enableChoice
  )

  invariant(
    enabled,
    'Choice (de-)selection not enabled for question %s',
    questionId
  )*/
}

function select(state, choiceId) {
  assertSelectionEnabled(state)

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
  assertSelectionEnabled(state)

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
      return update(state, {
        enableChoice: {$set: false},
        enableSubmit: {$set: false}
      })
    default:
      return state
  }
}

