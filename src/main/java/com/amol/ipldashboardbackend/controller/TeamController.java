package com.amol.ipldashboardbackend.controller;

import java.time.LocalDate;
import java.util.List;

import com.amol.ipldashboardbackend.model.Match;
import com.amol.ipldashboardbackend.model.Team;
import com.amol.ipldashboardbackend.repository.MatchRepository;
import com.amol.ipldashboardbackend.repository.TeamRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable(value = "teamName") String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.getLatestMatchByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable(value = "teamName") String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return this.matchRepository.getMathesByTeamBetweenDates(teamName, startDate, endDate);
    }

    @GetMapping("/teams")
    public Iterable<Team> getAllteams() {
        return this.teamRepository.findAll();
    }

}
