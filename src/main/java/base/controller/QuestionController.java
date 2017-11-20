package base.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import base.bean.Question;
import base.dao.QuestionDAO;

@RestController
public class QuestionController {
	@Inject
	QuestionDAO dao;

	@RequestMapping(value = "/question", method = RequestMethod.GET,produces="application/json")
	public void main() {
	}
	
	@RequestMapping(value = "/question/{id}", method = RequestMethod.GET,produces="application/json")
	public List<Question> haekysymyksetJSON(@PathVariable int id) {
		List<Question> questions = dao.hae(id);
		return questions;
	}
	
	@RequestMapping(value = "/question", method = RequestMethod.POST, headers="Content-Type=application/json")
	public void tallennaKysymys(@RequestBody Question question) {
		System.out.println("Testi: "+question.getKyselyid() + ", " + question.getKysymys());
		dao.talleta(question);
	}

	
}
