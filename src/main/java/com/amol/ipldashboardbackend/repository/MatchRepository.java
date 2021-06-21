package com.amol.ipldashboardbackend.repository;

import com.amol.ipldashboardbackend.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    @Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> getMathesByTeamBetweenDates(@Param("teamName") String teamName, @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate);

    List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(String team1, LocalDate startDate,
            LocalDate endDate, String team2, LocalDate startDate2, LocalDate endDate2);

    // java supports method defination in interface by using default keyword
    default List<Match> getLatestMatchByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
