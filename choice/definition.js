import {reduce} from './reducer'
import Choices from './view.jsx'

export default {
  type: 'application/x.choice+json',
  component: Choices,
  reduce
}
