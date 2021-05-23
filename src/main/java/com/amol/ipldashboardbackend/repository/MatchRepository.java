package com.amol.ipldashboardbackend.repository;

import com.amol.ipldashboardbackend.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match,Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    //java supports method defination in interface by using default keyword
    default List<Match> getLatestMatchByTeam(String teamName,int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName,teamName, PageRequest.of(0,count));
    }
}
