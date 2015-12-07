export const SELECT_CHOICE = 'SELECT_CHOICE'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

export function select(questionId, choiceId, isSelected) {
  return {
    type: SELECT_CHOICE,
    questionId,
    choiceId,
    isSelected
  }
}

export function submit(questionId) {
  return {
    type: SUBMIT_ANSWER,
    questionId
  }
}
