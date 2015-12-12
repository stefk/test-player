import React from 'react'
import {fill, submit} from './actions'
import {delayUnique} from './../utils'
import {dispatch} from './../store'

const Text = props =>
  <span>{props.text}</span>

const Hole = props =>
  <input
    type="text"
    size={props.size}
    placeholder={props.placeholder}
    onChange={delayUnique(500, e => dispatch(
      fill(props.questionId, props.choiceId, e.target.value)
    ))}
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
            choiceId={token.data.id}
            size={token.data.size}
            placeholder={token.data.placeholder}
          />
      )}
    </div>
    <input
      type="submit"
      value="Submit"
      onClick={() => dispatch(submit(props.question.id))}
    />
  </div>

let T = React.PropTypes

Text.propTypes = {
  text: T.string.isRequired
}

Hole.propTypes = {
  questionId: T.string.isRequired,
  choiceId: T.string.isRequired,
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

