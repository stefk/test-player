import React from 'react'
import {resolve} from './../resolver'

const Player = props =>
  <div>
    <h1>Quiz: {props.title}</h1>
    {props.questions.map(question => {
      question.key = `${question.question.type}-${question.question.id}`

      return React.createElement(
        resolve(question.question).component,
        question
      )
    })}
  </div>

const T = React.PropTypes

Player.propTypes = {
  title: T.string.isRequired,
  questions: T.arrayOf(T.object).isRequired
}

export default Player
