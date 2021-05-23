package com.amol.ipldashboardbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class IplDashboardController {

    @GetMapping("hello/{name}")
    public String getHello(@PathVariable("name") String name) {
        return "Hello " + name;
    }

}
