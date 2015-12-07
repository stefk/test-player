export const SELECT_CHOICE = 'SELECT_CHOICE'
export const DESELECT_CHOICE = 'DESELECT_CHOICE'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

export function select(questionId, choiceId) {
  return {
    type: SELECT_CHOICE,
    questionId,
    choiceId
  }
}

export function deselect(questionId, choiceId) {
  return {
    type: DESELECT_CHOICE,
    questionId,
    choiceId
  }
}

export function submit(questionId) {
  return {
    type: SUBMIT_ANSWER,
    questionId
  }
}
