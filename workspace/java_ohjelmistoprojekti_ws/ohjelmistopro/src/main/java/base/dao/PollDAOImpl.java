package base.dao;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import base.bean.Poll;

@Repository
public class PollDAOImpl implements PollDAO {

	
	// TODO 
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
		List<Poll> kyselyt = new ArrayList<Poll>();
//		List<Poll> kyselyt;
		String sql = "SELECT id, nimi, publboolean FROM kysely";
		PollRowMapper rowMapper = new PollRowMapper();
		kyselyt = jdbcTemplate.query(sql, rowMapper);
		Poll poll = new Poll(1, "Kysely1", false);
		kyselyt.add(poll);
		return kyselyt;

	}

	public void talleta(Poll poll) {
		String sql = "INSERT INTO kysely(nimi, publboolean) VALUES (?,?)";
		Object[] parametrit = new Object[] { poll.getName(), false };
		jdbcTemplate.update(sql, parametrit);

	}

}
