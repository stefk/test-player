import React from 'react'
import {fill, submit} from './actions'
import {makeEventDebouncer} from './../utils'

const Text = props =>
  <span>{props.text}</span>

const Hole = (props, context) =>
  <input
    type="text"
    size={props.size}
    placeholder={props.placeholder}
    defaultValue={props.text}
    onChange={makeEventDebouncer(e => context.dispatch(
      fill(props.questionId, props.holeId, e.target.value)
    ), 400)}
    disabled={!props.enableFill}
  />

const Cloze = (props, context) =>
  <div>
    <h3>Question: {props.question.title}</h3>
    <div>
      {props.tokens.map((token, index) =>
        token.type === 'text' ?
          <Text key={index} text={token.data}/> :
          <Hole
            key={index}
            questionId={props.question.id}
            holeId={token.data.id}
            text={props.filledHoles.find(hole =>
              hole.id === token.data.id
            ).text}
            size={token.data.size}
            placeholder={token.data.placeholder}
            enableFill={props.enableFill}
          />
      )}
    </div>
    <input
      type="submit"
      value="Submit"
      disabled={!props.enableSubmit}
      onClick={() => context.dispatch(submit(props.question.id))}
    />
  </div>

const T = React.PropTypes

Text.propTypes = {
  text: T.string.isRequired
}

Hole.propTypes = {
  questionId: T.string.isRequired,
  holeId: T.string.isRequired,
  text: T.string.isRequired,
  size: T.number.isRequired,
  placeholder: T.string.isRequired,
  enableFill: T.bool.isRequired
}

Cloze.propTypes = {
  question: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired
  }).isRequired,
  enableFill: T.bool.isRequired,
  enableSubmit: T.bool.isRequired,
  tokens: T.arrayOf(T.shape({
    type: T.oneOf(['text', 'hole']).isRequired,
    data: T.any.isRequired
  })).isRequired,
  filledHoles: T.arrayOf(T.shape({
    id: T.string.isRequired,
    text: T.string.isRequired
  })).isRequired
}

Hole.contextTypes = {dispatch: T.func.isRequired}
Cloze.contextTypes = {dispatch: T.func.isRequired}

export default Cloze

