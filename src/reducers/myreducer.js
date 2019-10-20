const intialState = {
  num: 0,
  data: null,
  error: "",
  error2: ""
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, num: state.num + 1 };
    case "FetchData":
      return { ...state, data: action.data };
    case "FetchMoreData":
      return { ...state, data: action.data.concat(action.data) };
    case "ERROR":
      return { ...state, error: action.msg };
    case "ERROR - MORE DATA":
      return { ...state, error2: action.msg };
    default:
      return state;
  }
};

export default reducer;
