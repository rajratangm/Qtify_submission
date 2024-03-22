import React, { useState } from "react";

function Buttons({ type, setGenres, genres }) {
  const setGenre = () => {
    setGenres(type);
  };
  return (
    <button
      className={`${genres === type && "underline text-indigo-500"}`}
      onClick={setGenre}
    >
      {type}
    </button>
  );
}

export default Buttons;
