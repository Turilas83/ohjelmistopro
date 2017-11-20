package base.dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import base.bean.Answer;

@Repository
public class AnswerDAOImpl implements AnswerDAO {

	@Inject
	private JdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Answer> haeKaikki(int kyselyId) {
		List<Answer> answers;
		String sql = "SELECT * FROM vastaus WHERE kyselyId = '"+kyselyId+"'";
		AnswerRowMapper rowMapper = new AnswerRowMapper();
		answers = jdbcTemplate.query(sql, rowMapper);
		return answers;
	}
	
	public List<Answer> hae(int kyselyId, int kysymysId) {
		List<Answer> answers;
		String sql = "SELECT * FROM vastaus WHERE kyselyId = '"+kyselyId+"' AND kysymysId = '"+kysymysId+"'";
		AnswerRowMapper rowMapper = new AnswerRowMapper();
		answers = jdbcTemplate.query(sql, rowMapper);
		return answers;
	}

	public void talleta(Answer answer) {
		String sql = "INSERT INTO vastaus (kyselyId, kysymysId, vastaus) VALUES (?,?,?)";
		Object[] parametrit = new Object[] { answer.getPollId(), answer.getQuestionId(), answer.getAnswer() };
		jdbcTemplate.update(sql, parametrit);		
	}

}
