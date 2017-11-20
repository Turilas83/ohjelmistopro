package base.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import base.bean.Poll;
import base.dao.PollDAO;

@RestController
public class PollController {
	@Inject
	PollDAO dao;
	
	@RequestMapping(value = "/poll", method = RequestMethod.GET,produces="application/json")
	public List<Poll> haekyselytJSON() {
		List<Poll> polls = dao.haeKaikki();
		return polls;
	}
			
	@RequestMapping(value = "/poll/{id}", method = RequestMethod.GET,produces="application/json")
	public List<Poll> getPollById(@PathVariable int id) {
		List<Poll> poll = dao.hae(id);
		return poll;
	}
	
	@RequestMapping(value = "/poll", method = RequestMethod.POST, headers="Content-Type=application/json")
	public void tallennaKysely(@RequestBody Poll poll) {
		dao.talleta(poll);
	}
}
