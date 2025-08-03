// src/components/ListOfPlayers.js
import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "Shubman Gill", score: 75 },
    { name: "KL Rahul", score: 65 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Ravindra Jadeja", score: 90 },
    { name: "Jasprit Bumrah", score: 45 },
    { name: "Kuldeep Yadav", score: 78 },
    { name: "Mohammed Shami", score: 81 },
    { name: "Suryakumar Yadav", score: 68 },
    { name: "Ishan Kishan", score: 85 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h3>Players with Score Below 70:</h3>
      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListOfPlayers;
