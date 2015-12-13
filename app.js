import {createStore} from 'redux'
import data from './data'
import {reduce, render} from './player/player'
import {init} from './player/actions'

const container = document.querySelector('main')
const store = createStore(reduce, data)
const dispatch = action => {
  console.log('Dispatching:', action)
  store.dispatch(action)
}

store.subscribe(() => render(container, store.getState()))
dispatch(init(data, dispatch))

