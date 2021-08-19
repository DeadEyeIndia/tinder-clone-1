import React from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonRoundedIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://pluspng.com/img-png/tinder-logo-png-spoiler-1460.jpg"
        alt="Tinder Logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
