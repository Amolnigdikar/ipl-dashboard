import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailcard.scss";

export const MatchDetailcard = ({ teamName, match }) => {
  const otherteam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailcard won-card" : "MatchDetailcard lost-card"
      }
    >
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={`/teams/${otherteam}`}>{otherteam}</Link>
        </h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h3>
      </div>

      <div className="additional-detail">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man Of The Match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>On Field Umpires</h3>
        <p>
          {match.umpire1} and {match.umpire2}
        </p>
      </div>
    </div>
  );
};
