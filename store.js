import {createStore} from 'redux'
import {choiceQuestion} from './choice/reducers'
import questions from './choice/samples'

let data = {
  title: 'Lorem',
  questions: [
    {
      question: questions[0],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    },
    {
      question: questions[1],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    }
  ]
}

function reduce(state, action) {
  return {
    title: state.title,
    questions: [
      choiceQuestion(state.questions[0], action),
      choiceQuestion(state.questions[1], action)
    ]
  }
}

let store = createStore(reduce, data)

let dispatch = action => {
  console.log('Dispatching...', action)
  store.dispatch(action)
}

export {store, dispatch}
