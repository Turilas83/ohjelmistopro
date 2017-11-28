package base.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import base.bean.Poll;
import base.dao.PollDAO;

@CrossOrigin
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
	public Poll getCountryById(@PathVariable int id) {
		return null;
	}
	
	@RequestMapping(value = "/poll", method = RequestMethod.POST)
	public void tallennaKysely(@RequestBody Poll poll) {
		dao.talleta(poll);
	}
	
	@RequestMapping(value = "/poll/{id}", method = RequestMethod.DELETE)
	public void poistaKysely(@PathVariable int id) {
		dao.poista(id);
	}

	@RequestMapping(value = "/poll", method = RequestMethod.PUT)
	public void paivitaKysely(@RequestBody Poll poll) {
		dao.paivita(poll);
	}

	
	
}
