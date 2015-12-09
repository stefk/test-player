import invariant from 'invariant'
import {choiceQuestion} from './choice/reducers'
import {clozeQuestion} from './cloze/reducers'
import Choices from './choice/view.jsx'
import Cloze from './cloze/view.jsx'

const map = {
  'application/x.choice+json': {
    reducer: choiceQuestion,
    component: Choices
  },
  'application/x.cloze+json': {
    reducer: clozeQuestion,
    component: Cloze
  }
}

export function resolve(question) {
  invariant(
    question.hasOwnProperty('type'),
    'Question must have a "type" property'
  )

  invariant(
    typeof map[question.type] !== 'undefined',
    'Cannot resolve unknown question type "%s"',
    question.type
  )

  return map[question.type]
}
