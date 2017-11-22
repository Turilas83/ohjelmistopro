package base.dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import base.bean.Poll;

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

	public List<Poll> hae(int id) {
		List<Poll> kysely;
		String sql = "SELECT id, nimi FROM kysely WHERE id = '" + id + "'";
		PollRowMapper rowMapper = new PollRowMapper();

		try {
			kysely = jdbcTemplate.query(sql, rowMapper);
		} catch (IncorrectResultSizeDataAccessException e) {
			throw new PollNotFoundException(e);
		}
		return kysely;

	}

	public List<Poll> haeKaikki() {
		List<Poll> kyselyt;
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
