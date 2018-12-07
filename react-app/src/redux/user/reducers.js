import { TOGGLE_STAR, TOGGLE_FETCHING } from "./actions"

const scaffold = {
  nickname: "toruticas",
  firstName: "Rafael",
  lastName: "Silva",
  description: "Sou síndico do Brasil desde 2013, apaixonado por História e líder técnico de Front-End na Arquivei (São Carlos).",
  starred: false,
  isFetching: false,
}

export default (state = scaffold, action = {}) => {
  switch (action.type) {
    case TOGGLE_STAR:
      return {
        ...state,
        starred: !state.starred,
      }
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      }
    default:
      return state
  }
}
