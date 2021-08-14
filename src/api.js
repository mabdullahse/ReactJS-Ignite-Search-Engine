const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  return ("0" + (new Date().getMonth() + 1)).slice(-2);
};
const getCurrentYear = () => {
  return new Date().getFullYear();
};
const getCurrentDate = () => {
  return ("0" + (new Date().getDay() + 1)).slice(-2);
};

const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDate()}`;
const prevYearDate = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDate()}`;
const nextYearDate = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDate()}`;

const popular_games = `games?dates=${prevYearDate},${currentDate}&ordering=-rating&page_size=10&key=${process.env.REACT_APP_WEATHER_API_KEY}`;
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10&key=${process.env.REACT_APP_WEATHER_API_KEY}`;
const news_games = `games?dates=${prevYearDate},${currentDate}&ordering=-released&page_size=10&key=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${news_games}`;
export const getGameDetail = (id) =>
  `${base_url}games/${id}?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const getGamesScreens = (id) =>
  `${base_url}games/${id}/screenshots?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const getGamesSearch = (search_content) =>
  `${base_url}games?key=${process.env.REACT_APP_WEATHER_API_KEY}&search=${search_content}`;
