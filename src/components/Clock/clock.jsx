import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClock from "../CustomHook/useClock";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();
  return <p style={{ fontSize: "50px" }}>{timeString}</p>;
}

export default Clock;
