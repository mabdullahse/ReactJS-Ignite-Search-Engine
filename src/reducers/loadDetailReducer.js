const initialState = {
  game: { platforms: [] },
  screens: [],
  isLoading: true,
};

const loadDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screens: action.payload.screens,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
export default loadDetailReducer;
