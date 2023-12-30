// Player.js

// Import React and the Card component from react-bootstrap
import React from "react";
import { Card } from "react-bootstrap";

// Import the external stylesheet for additional styles
import "../styles.css";

// Import the 'Roboto' font (assuming it's for the entire page)
import "roboto-npm-webfont";

// Player component functional definition
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="player">
      {/* Card component to display player details */}
      <Card className="cards">
        {/* Card header with a title */}
        <Card.Header className="title">Featured Player Details</Card.Header>
        {/* Card body containing player information */}
        <Card.Body>
          {/* Player Name */}
          <Card.Text className="text">
            {/* Span with player-title class for styling */}
            <span className="player-title">Player Name:</span> {name}
          </Card.Text>
          {/* Team */}
          <Card.Text className="text">
            <span className="player-title">Team: {team}</span>
          </Card.Text>
          {/* Nationality */}
          <Card.Text className="text">
            <span className="player-title">Nationality: {nationality}</span>
          </Card.Text>
          {/* Jersey Number */}
          <Card.Text className="text">
            <span className="player-title">Jersey Number: {jerseyNumber}</span>
          </Card.Text>
          {/* Age */}
          <Card.Text className="text">
            <span className="player-title">Age: {age}</span>
          </Card.Text>
          {/* Player image */}
          <Card.Text>
            <img src={imageUrl} alt={`Image of ${name}`} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// Export the Player component for use in other parts of the application
export default Player;
