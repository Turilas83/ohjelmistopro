package controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import bean.Poll;
import dao.PollDAO;
import dao.PollDAOImpl;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping ("/")
public class PollController {
	@Inject
	PollDAO dao;

	@RequestMapping(value = "/ohjelmistoprojekti1/", method = RequestMethod.GET, produces = "application/json")
	public List<Poll> haekyselytJSON() {
		List<Poll> polls = dao.haeKaikki();
		return polls;   // ei jsp-tiedostoa
	}
	
	@RequestMapping(value="pollName", method=RequestMethod.POST)
	public Poll talleta(@RequestParam("pollName") String name){
		Poll poll = new Poll();
		poll.setName(name);
		dao.talleta(poll);
		return poll;
	}
}