import React from 'react'
import {fill, submit} from './actions'
import {dispatch} from './../store'
import {makeEventDebouncer} from './../utils'

const Text = props =>
  <span>{props.text}</span>

const Hole = props =>
  <input
    type="text"
    size={props.size}
    placeholder={props.placeholder}
    defaultValue={props.text}
    onChange={makeEventDebouncer(e => dispatch(
      fill(props.questionId, props.holeId, e.target.value)
    ), 400)}
  />

const Cloze = props =>
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
          />
      )}
    </div>
    <input
      type="submit"
      value="Submit"
      disabled={!props.enableSubmit}
      onClick={() => dispatch(submit(props.question.id))}
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
  placeholder: T.string.isRequired
}

Cloze.propTypes = {
  question: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired
  }).isRequired,
  tokens: T.arrayOf(T.shape({
    type: T.oneOf(['text', 'hole']).isRequired,
    data: T.any.isRequired
  })).isRequired
}

export default Cloze

