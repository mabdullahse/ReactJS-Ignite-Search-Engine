import axios from "axios";

import { popularGamesUrl, getGamesSearch } from "../api";

export const loadGames = () => async (dispatch) => {
  const loadedData = await axios.get(popularGamesUrl());
  const loadedData2 = await axios.get(popularGamesUrl());
  const loadedData3 = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: loadedData.data.results,
      newGames: loadedData2.data.results,
      upcoming: loadedData3.data.results,
    },
  });
};

export const loadGamesSearch = (search) => async (dispatch) => {

  console.log(search);
  const loadedData = await axios.get(getGamesSearch(search));

  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      search: loadedData.data.results,
    },
  });
};
