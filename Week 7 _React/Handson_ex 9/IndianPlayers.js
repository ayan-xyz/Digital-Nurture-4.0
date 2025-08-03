// src/components/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  const allPlayers = ["Virat", "Rohit", "Gill", "Rahul", "Hardik", "Jadeja", "Bumrah", "Kuldeep", "Shami", "SKY", "Ishan"];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  const T20players = ["Virat", "Rohit", "SKY"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Mayank"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Even Team:</h2>
      <ul>{evenTeam.map((player, i) => <li key={i}>{player}</li>)}</ul>

      <h2>Odd Team:</h2>
      <ul>{oddTeam.map((player, i) => <li key={i}>{player}</li>)}</ul>

      <h2>Merged Players:</h2>
      <ul>{mergedPlayers.map((player, i) => <li key={i}>{player}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
