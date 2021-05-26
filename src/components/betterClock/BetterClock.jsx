import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClock from "../CustomHook/useClock";
import "./betterClock.scss";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();
  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
