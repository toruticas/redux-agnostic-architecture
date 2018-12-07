import React from "react"
import { connect } from "react-redux"

import * as selectors from "../redux/todo/selectors"
import * as actions from "../redux/todo/actions"
import * as effects from "../redux/todo/effects"

const TodoList = ({ value = "", onChange, onSubmit }) => (
  <div>
    <strong>Adiciona Tarefa</strong>
    <input
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder="Descrição da tarefa"
    />
    <button onClick={onSubmit}>Adicionar</button>
  </div>
)

const mapStateToProps = state => ({
  value: selectors.getFormValue(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: id => dispatch(actions.updateFormValue(id)),
  onSubmit: () => dispatch(effects.validateNewTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
