import {createStore} from 'redux'
import {choiceQuestion} from './choice/reducers'
import questions from './choice/samples'

let data = {
  question: questions[0],
  choiceId: null,
  enableChoice: true,
  enableSubmit: false,
}

let store = createStore(choiceQuestion, data)
let dispatch = action => {
  console.log('Dispatching...', action)
  store.dispatch(action)
}

export {store, dispatch}
