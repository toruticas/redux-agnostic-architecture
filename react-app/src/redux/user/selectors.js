export const getFullName = state =>
  state.user.firstName + " " +  state.user.lastName

export const getDescription = state => state
  .user.description

export const getStarState = state => state
  .user.starred

export const getFetchingState = state => state
  .user.isFetching

export const getNickname = state => state
  .user.nickname
