package base.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import base.bean.Poll;
import base.dao.PollDAO;

@RestController
public class PollController {
	@Inject
	PollDAO dao;
	
	@RequestMapping(value = "/kyselyt", method = RequestMethod.GET,produces="application/json")
	public List<Poll> haekyselytJSON() {
		List<Poll> polls = dao.haeKaikki();
		return polls;
	}
		
		
	@RequestMapping(value = "/kyselyt/{id}", method = RequestMethod.GET,produces="application/json")
	public Poll getCountryById(@PathVariable int id) {
		return null;
	}
	
}
