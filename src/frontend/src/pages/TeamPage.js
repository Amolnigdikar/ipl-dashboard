import { React, useEffect, useState } from "react";
import { MatchDetailcard } from "../components/MatchDetailcard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  useEffect(() => {
    const fecthMatches = async () => {
      const response = await fetch(
        "http://localhost:8080/team/Rajasthan Royals"
      );
      const data = await response.json();
      setTeam(data);
      console.log(data);
    };

    fecthMatches();
  }, []);

  return (
    <div className="TeamPage">
      <h1>{team?.teamName}</h1>
      <MatchDetailcard match={team?.matches[0]} />

      {team?.matches?.slice(1).map((match, i) => (
        <MatchSmallCard match={match} />
      ))}
    </div>
  );
};
