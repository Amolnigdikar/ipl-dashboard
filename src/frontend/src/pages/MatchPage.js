import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailcard } from "../components/MatchDetailcard";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchTeamMatchesBetweenDate = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
      console.log(data);
    };

    fetchTeamMatchesBetweenDate();
  }, [year, teamName]);
  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
        <YearSelector teamName={teamName} />
      </div>

      {matches.length > 0 ? (
        <div className="match-section">
          <h1>
            {teamName} Matches in {year}
          </h1>
          {matches.map((match, i) => (
            <MatchDetailcard teamName={teamName} match={match} />
          ))}
        </div>
      ) : (
        <h2 className="error-section">No matches found</h2>
      )}
    </div>
  );
};
