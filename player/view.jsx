import React from 'react'
import Choices from './../choice/view.jsx'

const Player = props =>
  <div>
    <h1>Quiz: {props.title}</h1>
    {props.questions.map(question =>
      <Choices key={question.question.id} {...question}/>
    )}
  </div>

let T = React.PropTypes

Player.propTypes = {
  title: T.string.isRequired,
  questions: T.arrayOf(T.object).isRequired
}

export default Player
