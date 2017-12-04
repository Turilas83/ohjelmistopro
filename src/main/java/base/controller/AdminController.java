package base.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@Controller
public class AdminController {

	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String main() {
		return "secure/admin";
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String hello() {
		return "index";
	}

}
