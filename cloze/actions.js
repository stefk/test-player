export const FILL_HOLE = 'FILL_HOLE'
export const SUBMIT_HOLES = 'SUBMIT_HOLES'

export function fill(questionId, holeId, text) {
  return {
    type: FILL_HOLE,
    questionId,
    holeId,
    text
  }
}

export function submit(questionId) {
  return {
    type: SUBMIT_HOLES,
    questionId
  }
}
