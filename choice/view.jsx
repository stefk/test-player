import React from 'react';
import {select, deselect, submit} from './actions'
import {dispatch} from './../store'

const Choice = props =>
  <div>
    <input
      type={props.multiple ? "checkbox" : "radio"}
      id={props.id}
      name={props.questionId}
      value={props.id}
      disabled={!props.enabled}
      defaultChecked={props.selected}
      onChange={e => dispatch(
        e.target.checked ?
          select(props.questionId, props.id) :
          deselect(props.questionId, props.id)
      )}
    />
    <label htmlFor={props.id}>{props.text}</label>
  </div>

const Choices = props =>
  <div>
    <h3>Question title: {props.question.title}</h3>
    { props.question.choices.map(choice =>
      <Choice
        key={choice.id}
        id={choice.id}
        text={choice.text}
        questionId={props.question.id}
        enabled={props.enableChoice}
        selected={props.selectedIds.indexOf(choice.id) > -1}
        multiple={props.question.multiple}
      />
    )}
    <input
      type="submit"
      value="Submit"
      disabled={!props.enableSubmit}
      onClick={() => dispatch(submit(props.question.id))}
    />
  </div>

const T = React.PropTypes

Choices.propTypes = {
  question: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    multiple: T.bool.isRequired,
    choices: T.arrayOf(T.shape({
      id: T.string.isRequired,
      text: T.string.isRequired
    })).isRequired
  }).isRequired,
  selectedIds: T.arrayOf(T.string).isRequired,
  enableChoice: T.bool.isRequired,
  enableSubmit: T.bool.isRequired
}

export default Choices

