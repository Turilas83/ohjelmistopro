package base.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin
@Controller
public class AdminController {

	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public ModelAndView main() {
		ModelAndView modelAndview = new ModelAndView("views/secure/admin.jsp");
		return modelAndview;
	}
}
