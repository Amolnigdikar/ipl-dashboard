import React from "react";

export const MatchDetailcard = ({ match }) => {
  return (
    <div className="MatchDetailcard">
      <h3>Latest Match</h3>
      <h4>
        {match?.team1} vs {match?.team2}
      </h4>
    </div>
  );
};
