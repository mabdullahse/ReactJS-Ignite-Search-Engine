const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        search: action.payload.search,
      };
    case "CLEAR_SEARCH_GAMES":
      return {
        ...state,
        search: [],
      };
    default:
      return { ...state, ...action.payload };
  }
};

export default gamesReducer;
