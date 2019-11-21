// Colin and Luis

import React from "react";
import styled from "styled-components";

const FriendsCard = props => {
  const matchProbability = (props.friends.match_probability / 13) * 100;
  const matchingPercentage = matchProbability.toFixed(2);

  return (
    <Card>
      <h2>Username: {props.friends.username} </h2>
      <h3>Match propability: {matchingPercentage}%</h3>
    </Card>
  );
};

export default FriendsCard;

// Styling here:

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: lightblue;
`;
