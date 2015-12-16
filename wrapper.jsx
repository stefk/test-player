import {Component, Children, createElement, PropTypes} from 'react'

export default class Wrapper extends Component {
  constructor(props, context) {
    super(props, context)
    this.store = props.store
    this.state = props.data
    this.store.subscribe(() => {
      console.log('Setting new state:', this.store.getState())
      this.setState(this.store.getState())
    })
  }

  getChildContext() {
    return { dispatch: this.dispatch.bind(this) }
  }

  dispatch(action) {
    console.log('Dispatching:', action)
    this.store.dispatch(action)
  }

  render() {
    return createElement(
      this.props.children[0],
      this.state
    )
  }
}

Wrapper.propTypes = {
  store: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

Wrapper.childContextTypes = {
  dispatch: PropTypes.func.isRequired
}

