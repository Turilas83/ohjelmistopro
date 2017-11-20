package base.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import base.bean.Question;

public class QuestionRowMapper implements RowMapper<Question> {

	public Question mapRow(ResultSet rs, int rowNum) throws SQLException {
		Question question = new Question();
		question.setKysymysId(rs.getInt("kysymysId"));
		question.setKyselyid(rs.getInt("kyselyId"));
		question.setKysymys(rs.getString("kysymysNimi"));
		return question;
	}
}
