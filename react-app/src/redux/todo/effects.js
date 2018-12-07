import * as selectors from "./selectors"
import * as actions from "./actions"

export const validateNewTodo = () => (dispatch, getState) => {
  const state = getState()

  if (selectors.getFormValue(state)) {
    dispatch(actions.addTodo())
  } else {
    console.log("Mundo gira, vacilão roda")
  }
}
