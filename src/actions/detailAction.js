import axios from "axios";
import { getGameDetail, getGamesScreens } from "../api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const loadDetail = await axios.get(getGameDetail(id));
  const loadDetailScreens = await axios.get(getGamesScreens(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: loadDetail.data,
      screens: loadDetailScreens.data.results,
    },
  });
};
export default loadDetail;
