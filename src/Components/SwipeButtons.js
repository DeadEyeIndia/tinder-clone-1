import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarButton from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarButton fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
