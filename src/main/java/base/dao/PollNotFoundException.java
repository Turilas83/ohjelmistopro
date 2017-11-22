package base.dao;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class PollNotFoundException extends RuntimeException {
	
	public PollNotFoundException(Exception cause) {
		super(cause);
	}
	
}