const authReducer = (state = false, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return !state;
    case "LOGOUT":
      return (state = false);
    default:
      return state;
  }
};
export default authReducer;
