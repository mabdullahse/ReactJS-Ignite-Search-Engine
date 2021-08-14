import React from "react";

//styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";
import { Link } from "react-router-dom";

function Game({ name, background_image, released, id }) {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  const clickHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledImage layoutId={stringPathId} onClick={clickHandler}>
      <Link to={`/games/${id}`}>
        <h1>{name}</h1>
        <h3>{released} </h3>
        <motion.img
          src={background_image}
          alt={name}
          layoutId={`image ${stringPathId}`}
        />
      </Link>
    </StyledImage>
  );
}
const StyledImage = styled(motion.div)`
  transform: perspective(500px) translate3d(10px, 0, 0px) !important;
  cursor: pointer;
  min-height: 30vh;
  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
