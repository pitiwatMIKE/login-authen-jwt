const initialState = {
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, count: state.count +1 };

    default:
      return state;
  }
};
