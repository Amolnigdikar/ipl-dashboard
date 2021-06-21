import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./AllTeamPage.scss";

export const AllTeamPage = () => {
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch("http://localhost:8080/teams");
      const data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);
  return (
    <div className="AllTeamPage">
      <h1 className="header-section">IPL Dashboard By Amol Nigdikar</h1>

      <div className="team-section">
        {teams.map((team, i) => (
          <div
            key={i}
            className="team-tile"
            onClick={() => {
              history.push(`/teams/${team.teamName}`);
            }}
          >
            <h1>{team.teamName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
