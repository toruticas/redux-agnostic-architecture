import React from "react"
import { connect } from "react-redux"

import TodoItem from "./TodoItem"

import * as selectors from "../redux/todo/selectors"
import * as actions from "../redux/todo/actions"

const TodoList = ({ list = [], onToggle }) => (
  <div>
    <h1>Meus Afazeres</h1>

    {list.length > 0
      ? <ul>{list.map(item => <TodoItem key={item.id} item={item} onToggle={onToggle} />)}</ul>
      : <i>Lista Vazia</i>}
  </div>
)

const mapStateToProps = state => ({
  list: selectors.getList(state)
})

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(actions.toggleItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
