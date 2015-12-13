import {reduce} from './reducer'
import Cloze from './view.jsx'

export default {
  type: 'application/x.cloze+json',
  component: Cloze,
  reduce
}
