package com.alexperal.ognen.hardcoders.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Stream;

@RestController
@RequestMapping("/api/status")
public class BookController {


	@GetMapping
	public Stream<String> findAll() {
		return Stream.of("Hello", "World");
	}


}