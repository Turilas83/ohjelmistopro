package base.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.util.JSONPObject;

import base.bean.Answer;
import base.dao.AnswerDAO;

@RestController
public class AnswerController {
	@Inject
	AnswerDAO dao;
	
	// ei parametreja
	@RequestMapping(value = "/answer", method = RequestMethod.GET,produces="application/json")
	public void main() {
	}
	
	// hae kaikki vastaukset kysymykseen. i = kysely, d = kysymys
	@RequestMapping(value = "/answer/{i}/{d}", method = RequestMethod.GET,produces="application/json")
	public List<Answer> haeVastauksetJSON(@PathVariable int i, @PathVariable int d) {
		List<Answer> answers = dao.hae(i, d);
		return answers;
	}
	
	@RequestMapping(value = "/answer/{id}", method = RequestMethod.GET,produces="application/json")
	public List<Answer> haeVastauksetJSON(@PathVariable int id) {
		List<Answer> answers = dao.haeKaikki(id);
		return answers;
	}
	
	@RequestMapping(value = "/answer", method = RequestMethod.POST, headers="Content-Type=application/json")
	public void tallennaVastaus(@RequestBody Answer answer) {
		dao.talleta(answer);
	}
	
	
	
	
}
