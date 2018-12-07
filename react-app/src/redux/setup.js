import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import user from "./user/reducers"
import todo from "./todo/reducers"

const reducers = combineReducers({ user, todo })

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
