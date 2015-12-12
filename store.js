import {createStore} from 'redux'
import {resolve} from './resolver'
import choices from './choice/samples'
import clozes from './cloze/samples'

let data = {
  title: 'Lorem',
  questions: [
    {
      question: choices[0],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    },
    {
      question: choices[1],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    },
    {
      question: clozes[0],
      tokens: [
        {
          type: 'text',
          data: 'Foo bar '
        },
        {
          type: 'hole',
          data: {
            id: "1",
            size: 10,
            placeholder: ""
          }
        },
        {
          type: 'text',
          data: ' baz '
        }
      ],
      filledHoles: []
    }
  ]
}

function reduce(state, action) {
  return {
    title: state.title,
    questions: state.questions.map(question =>
      resolve(question.question).reducer(question, action)
    )
  }
}

let store = createStore(reduce, data)

let dispatch = action => {
  console.log('Dispatching...', action)
  store.dispatch(action)
}

export {store, dispatch}
