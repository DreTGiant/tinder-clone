import React from "react";
import "./header.styles.css";
import ForumIcon from "@material-ui/icons/Forum";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonRoundedIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder_logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
