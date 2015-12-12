import {createStore} from 'redux'
import {resolve} from './resolver'
import choices from './choice/samples'
import clozes from './cloze/samples'

const data = {
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
      enableSubmit: false,
      tokens: [
        {
          type: 'text',
          data: 'Foo bar '
        },
        {
          type: 'hole',
          data: {
            id: '1',
            size: 10,
            placeholder: ''
          }
        },
        {
          type: 'text',
          data: ' baz '
        },
        {
          type: 'hole',
          data: {
            id: '2',
            size: 12,
            placeholder: 'quz'
          }
        },
      ],
      filledHoles: [
        {
          id: '1',
          text: 'FOO'
        },
        {
          id: '2',
          text: ''
        }
      ]
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

const store = createStore(reduce, data)

const dispatch = action => {
  console.log('Dispatching...', action)
  store.dispatch(action)
}

export {store, dispatch}
