import request from "../_helpers/fakeRequest"

import * as actions from "./actions"
import * as selectors from "./selectors"

export const toggleUserStar = () => async (dispatch, getState) => {
  const state = getState()

  if (selectors.getFetchingState(state)) {
    return
  }

  const nickname = selectors.getNickname(state)
  const starred = selectors.getStarState(state)

  dispatch(actions.toggleFetching())

  try {
    const response = await request(`star-user/${nickname}`, { nickname, starred: !starred })
    dispatch(actions.toggleStar())
    console.log(response.message)
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(actions.toggleFetching())
  }
}
