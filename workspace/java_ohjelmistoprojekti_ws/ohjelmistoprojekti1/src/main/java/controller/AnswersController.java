package controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import dao.SaveAnswersDAO;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


public class AnswersController {
	
	// otetaan vastaan kysymyksen numero ja checkbox vastaus
	@RequestMapping(value = "/addCheckBoxAnswer", method = RequestMethod.POST)
	public void checkBox(@RequestParam("lomakeNro") int lomakeNro,@RequestParam("kysNro") int qNr,@RequestParam("kysVal") int value) {
		
		SaveAnswersDAO saDAO = new SaveAnswersDAO();
		
	}
	
	// otetaan vastaan multiple choice vastaus
	public void multipleChoice(int lomakeNro, int qNr, int[] values) {
		
	}
	
	// otetaan vastaan skaala
	public void Scala(int lomakeNro, int qNr, int value) {
		
	}
	
	// otetaan vastaan tekstivastaus
	public void TextAnswer(int lomakeNro, int qNr, String str) {
		String sanitized = str.replaceAll("[-.\\+*?\\[^\\]$(){}=!<>|:\\\\]", "\\\\$0");
		
	}
}
