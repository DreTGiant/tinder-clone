import React from "react";
import "./header.styles.css";
import ForumIcon from "@material-ui/icons/Forum";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonRoundedIcon className="header_icon" fontSize="large" />
      </IconButton>
      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder_logo"
      />
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
