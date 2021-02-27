package com.alexperal.hardcoders;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class TeamsController {

    @GetMapping("/api/v1/hello")
    public String getHello() {
        return "Hello, World!";
    }

    @GetMapping("/api/v1/teams")
    public List<TeamDTO> getTeams() {
        TeamDTO team1 = new TeamDTO("exampleName", "exampleId");
        TeamDTO team2 = new TeamDTO("exampleName", "exampleId");

        log.info("User 1 {} is equal to user 2 {} ? {}", team1, team2, team1.equals(team2));

        return List.of(team1, team2);
    }
}
