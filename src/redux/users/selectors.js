export const selectUser = state => state.users.user;
export const selectUserToken = state => state.users.user.token;
export const selectUserIsLoggedIn = state => state.users.isLoggedIn;
export const selectRefreshing = state => state.users.isRefreshing;
