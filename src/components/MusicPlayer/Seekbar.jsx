/* eslint-disable quotes */
import React from "react";
import "../../index.css";

const Seekbar = ({ value, min, max, onInput }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        id="inputRange"
        className="md:block w-24 md:w-56 2xl:w-96 h-2 mx-4 2xl:mx-6 rounded-lg accent-violet-500"
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
