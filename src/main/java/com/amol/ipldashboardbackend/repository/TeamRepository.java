package com.amol.ipldashboardbackend.repository;

import com.amol.ipldashboardbackend.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String team);

}
