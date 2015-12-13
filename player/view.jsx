import React from 'react'
import {getHandler} from './player'

const Player = props =>
  <div>
    <h1>Quiz: {props.title}</h1>
    {props.questions.map(question => {
      const data = question.question
      question.key = `${data.type}-${data.id}`

      return React.createElement(
        getHandler(data).component,
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
