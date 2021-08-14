import React from "react";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "../style/HeaderStyle";

import MovieLogo from "../images/movie.svg";
import TMDBLogo from "../images/tmdb.svg";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={MovieLogo} alt="movie logo" />
      <TMDBLogoImg src={TMDBLogo} alt="the TMDB logo" />
    </Content>
  </Wrapper>
);

export default Header;
