import React, { useState } from "react";
import logo from "../img/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadGamesSearch } from "../actions/gamesActions";
import { useDispatch, useSelector } from "react-redux";
import { fadeIn } from "./../animations";

function Nav() {
  const dispatch = useDispatch();
  const [searchInput, setsearchInput] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(loadGamesSearch(searchInput));
  };
  const clearSearchHandler = () => {
    dispatch({ type: "CLEAR_SEARCH_GAMES" });
    setsearchInput("");
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={onFormSubmitHandler}>
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
    </StyledNav>
  );
}
const StyledNav = styled(motion.nav)`
  margin: 2rem;
  text-align: center;
  input {
    border: none;
    box-shadow: 0 0 30px rgb(185 185 185);
    height: 2rem;
    width: 30%;
    outline: none;
    font-size: 1.5rem;
    padding: 1.4rem 2rem;
    margin-top: 1rem;
  }
  button {
    border: none;
    font-size: 1.5rem;
    background: bisque;
    color: white;
    cursor: pointer;
    padding: 0.5rem 2rem;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export default Nav;
