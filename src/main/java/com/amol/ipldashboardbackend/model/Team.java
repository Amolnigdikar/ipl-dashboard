package com.amol.ipldashboardbackend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long totalMatchesPlayed;
    private long totalWins;

    @Transient // telling jpa that dont bother with this field because I need this field to send the user dont store this field in the database
    private List<Match> matches;

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public Team() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public long getTotalMatchesPlayed() {
        return totalMatchesPlayed;
    }

    public void setTotalMatchesPlayed(long totalMatchesPlayed) {
        this.totalMatchesPlayed = totalMatchesPlayed;
    }

    public long getTotalWins() {
        return totalWins;
    }

    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }

    public Team(String teamName, long totalMatchesPlayed) {
        this.teamName = teamName;
        this.totalMatchesPlayed = totalMatchesPlayed;
    }

    @Override
    public String toString() {
        return "Team [teamName=" + teamName + ", totalMatchesPlayed=" + totalMatchesPlayed + ", totalWins=" + totalWins
                + "]";
    }

}
