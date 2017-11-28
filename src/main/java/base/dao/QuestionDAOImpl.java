package base.dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import base.bean.Question;

@Repository
public class QuestionDAOImpl implements QuestionDAO {

	@Inject
	private JdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public List<Question> hae(int id) {
		List<Question> questions;
		String sql = "SELECT kysymysId, kysymysNimi, kyselyId FROM kysymys WHERE kyselyId = '"+id+"'";
		QuestionRowMapper rowMapper = new QuestionRowMapper();
		questions = jdbcTemplate.query(sql, rowMapper);
		return questions;
	}

	public void talleta(Question question) {
		String sql = "INSERT INTO kysymys(kysymysNimi, kyselyId) VALUES (?,?)";
		Object[] parametrit = new Object[] { question.getKysymys(), question.getKyselyid() };
		jdbcTemplate.update(sql, parametrit);		
	}
	
	public void muokkaa(Question question) {
		String sql = "UPDATE kysymys SET kysymysNimi = ? WHERE kyselyId = ? AND kysymysId = ?";
		Object[] parametrit = new Object[] { question.getKysymys(), question.getKyselyid(), question.getKysymysId() };
		jdbcTemplate.update(sql, parametrit);		
	}
	
	public void poista(int kysid, int pollid) {
		String sql = "DELETE FROM kysymys WHERE kysymysId = '" + kysid + "' AND kyselyId = '"+ pollid +"'";
		jdbcTemplate.update(sql);

	}


}
