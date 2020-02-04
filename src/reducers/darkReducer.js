const value = localStorage.getItem("Dark Mode");
// console.log(value);

const darkReducer = (state = value || false, action) => {
  switch (action.type) {
    case "DARK_MODE":
      localStorage.setItem("Dark Mode", !state);
      if (state) {
        localStorage.removeItem("Dark Mode");
      }
      return !state;
    default:
      console.log("default return");
      return state;
  }
};
export default darkReducer;
