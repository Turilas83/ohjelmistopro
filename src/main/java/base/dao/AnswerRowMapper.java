package base.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import base.bean.Answer;

public class AnswerRowMapper implements RowMapper<Answer> {
	public Answer mapRow(ResultSet rs, int rowNum) throws SQLException {
		Answer answer = new Answer();
		answer.setAnsId(rs.getInt("vastausID"));
		answer.setPollId(rs.getInt("kyselyId"));
		answer.setQuestionId(rs.getInt("kysymysId"));
		answer.setAnswer(rs.getString("vastaus"));
		answer.setStamp(rs.getDate("vastausPVM"));
		return answer;
	}
}
