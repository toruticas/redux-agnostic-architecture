import React from "react"

import UserSection from "./components/UserSection"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

export default () => (
  <div>
    <UserSection />

    <hr />

    <TodoForm />
    <TodoList />
  </div>
)
