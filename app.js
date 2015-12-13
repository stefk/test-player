import {createStore} from 'redux'
import {init, reduce, render} from './player/player'
import data from './data'

const container = document.querySelector('main')
const store = createStore(reduce)
const dispatch = action => {
  console.log('Dispatching:', action)
  store.dispatch(action)
}

store.subscribe(() => render(container, store.getState()))
init(data, dispatch)

