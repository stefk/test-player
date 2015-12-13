import {START_QUIZ} from './actions'
import {getHandler} from './player'

const defaultState = {
  title: '',
  questions: []
}

export function reduce(state = defaultState, action) {
  switch (action.type) {
    case START_QUIZ:
      return {
        title: action.quiz.title,
        questions: action.quiz.questions.map(question =>
          getHandler(question.question).reduce(question, action)
        )
      }
    default:
      return {
        title: state.title,
        questions: state.questions.map(question =>
          getHandler(question.question).reduce(question, action)
        )
      }
  }
}
