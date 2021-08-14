import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";

import Game from "../components/game";

//styled
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "./../animations";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathNameId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { newGames, popular, upcoming, search } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathNameId && <GameDetail pathId={pathNameId} />}
        </AnimatePresence>

        {search.length && (
          <div className="search-games">
            <h2>Search Games </h2>
            <Games>
              {search.map((game) => (
                <Game
                  name={game.name}
                  id={game.id}
                  key={game.id}
                  background_image={game.background_image}
                  released={game.released}
                />
              ))}
            </Games>
          </div>
        )}

        <h2>Upcoming Games </h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              key={game.id}
              background_image={game.background_image}
              released={game.released}
            />
          ))}
        </Games>

        <h2>Popular Games </h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              key={game.id}
              background_image={game.background_image}
              released={game.released}
            />
          ))}
        </Games>

        <h2>NewGames Games </h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              key={game.id}
              background_image={game.background_image}
              released={game.released}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 : {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
