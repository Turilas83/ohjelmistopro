package dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import bean.Poll;

@Repository
public class PollDAOImpl implements PollDAO {

	@Inject
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public Poll hae(int Id) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Poll> haeKaikki() {
		List<Poll> kyselyt = null;
		String sql = "SELECT id, nimi FROM kysely";
		PollRowMapper rowMapper = new PollRowMapper();
		kyselyt = jdbcTemplate.query(sql, rowMapper);
		return kyselyt;

	}

	public void talleta(Poll poll) {
		String sql = "INSERT INTO kysely(nimi) VALUES (?)";
		Object[] parametrit = new Object[] { poll.getName() };
		jdbcTemplate.update(sql, parametrit);

	}

}
