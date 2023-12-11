import React from 'react'

const navbar = ({onTypeSelect}) => {
  return (
    <div className="container">
      <div className="navbar">
        <h1>SNAPSHOT</h1>
      </div>
      <div className="buttons">
        <div className="button" onClick={() => onTypeSelect("mountain")}>
          Mountain
        </div>
        <div className="button" onClick={() => onTypeSelect("flowers")}>
          Flowers
        </div>
        <div className="button" onClick={() => onTypeSelect("anime")}>
          Anime
        </div>
        <div className="button" onClick={() => onTypeSelect("all")}>
          All
        </div>
      </div>
    </div>
  );
};

export default navbar