import hashGenerator from "../_helpers/hashGenerator"
import { UPDATE_FORM_VALUE, TOGGLE_ITEM, ADD_TODO } from "./actions"

const scaffold = {
  list: [{
    id: hashGenerator(),
    value: "Apresentar esse código no OpenSanca",
    checked: false,
  }, {
    id: hashGenerator(),
    value: "Ir na academia",
    checked: false,
  }],
  formValue: "",
}

export default (state = scaffold, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        formValue: action.value,
      }
    case TOGGLE_ITEM:
      return {
        ...state,
        list: state.list.map(item => ({
          ...item,
          checked: item.id === action.id
            ? !item.checked
            : item.checked
        }))
      }
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: hashGenerator(),
            value: state.formValue,
            checked: false
          }
        ],
        formValue: "",
      }
    default:
      return state
  }
}
