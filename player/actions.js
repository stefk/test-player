export const START_QUIZ = 'START_QUIZ'

export function startQuiz(quiz) {
  return {
    type: START_QUIZ,
    quiz
  }
}
