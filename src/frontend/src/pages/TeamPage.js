import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MatchDetailcard } from "../components/MatchDetailcard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fecthMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
      console.log(data);
    };

    fecthMatches();
  }, [teamName]);

  if (!team || !team.teamName)
    return <h1 style={{ textAlign: "center" }}>Oops! Team Not Found </h1>;

  const { totalWins, totalMatchesPlayed } = team;
  const totalLoss = totalMatchesPlayed - totalWins;

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team?.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            { title: "Loss", value: totalLoss, color: "#a34d5d" },
            { title: "Win", value: totalWins, color: "#4da375" },
          ]}
        />
      </div>
      {/*first row ends here*/}
      <div className="match-detail-section">
        <h3>Latest Match</h3>
        <MatchDetailcard teamName={team.teamName} match={team?.matches[0]} />
      </div>
      {team?.matches?.slice(1).map((match, i) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More {">"}{" "}
        </Link>
      </div>
    </div>
  );
};
