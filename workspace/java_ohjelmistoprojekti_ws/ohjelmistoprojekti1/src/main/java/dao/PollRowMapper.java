package dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import bean.Poll;


public class PollRowMapper implements RowMapper<Poll> {
	
	public Poll mapRow(ResultSet rs, int rowNum) throws SQLException {
		Poll poll = new Poll();
		poll.setId(rs.getInt("id"));
		poll.setName(rs.getString("name"));
		poll.setPublished(rs.getBoolean("published"));
		return poll;
	}
}
