package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import dao.SaveDAO;

@Controller
@RequestMapping(value = "/addQuestions")
public class QuestionsController {
	
	
	// tallenna checkbox kysymys
	@RequestMapping(value = "/addCheckBoxQuestion")
	public void checkBox(@RequestParam("cBoxVal") String str) {
		SaveDAO saveDAO = new SaveDAO();
		saveDAO.saveCheckBoxQuestion(str);		
	}
	
	// tallenna multiple choice
	@RequestMapping(value = "/addMultipleChoiceQuestion")
	public void multipleChoice(@RequestParam("multCVal") String str) {
		SaveDAO saveDAO = new SaveDAO();
		saveDAO.saveMultipleChoiceQuestion(str);
	}
	
	// Tallenna skaala 1-5
	@RequestMapping(value = "/addScaleQuestion")
	public void scala(@RequestParam("scalaVal") String str) {
		SaveDAO saveDAO = new SaveDAO();
		saveDAO.saveScaleQuestion(str);
	}
	
	// Tallenna tekstikysymys
	
	public void openText(String str) {
		SaveDAO saveDAO = new SaveDAO();
		saveDAO.saveTextQuestion(str);
	}
	
	
}
