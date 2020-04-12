const INITIAL_STATE = {
  todo: [],
  text: "",
};
let arr = [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_ACTION":
      return { ...state, text: action.payload };
    case "HANDLE_SUBMIT_ACTION":
      const textObj = { name: action.payload, id: Math.random() };
      arr.push(textObj);
      return { ...state, todo: arr, text: "" };
    case "HANDLE_DELETE_ACTION":
      arr = arr.filter((item) => item.id !== action.payload);

      return { ...state, todo: arr };
    default:
      return state;
  }
};
