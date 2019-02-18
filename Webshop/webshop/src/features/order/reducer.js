const SubmitReducer = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_ORDER":
      return {
        ...state,
        order: action.payload
      };

    default:
      return state;
  }
};

export default SubmitReducer;
