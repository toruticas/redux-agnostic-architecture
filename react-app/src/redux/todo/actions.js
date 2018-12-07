export const TOGGLE_ITEM = "todo/TOGGLE_ITEM"
export const ADD_TODO = "todo/ADD_TODO"
export const UPDATE_FORM_VALUE = "todo/UPDATE_FORM_VALUE"

export const toggleItem = id => ({
  id,
  type: TOGGLE_ITEM,
})

export const addTodo = () => ({
  type: ADD_TODO,
})

export const updateFormValue = value => ({
  value,
  type: UPDATE_FORM_VALUE,
})
