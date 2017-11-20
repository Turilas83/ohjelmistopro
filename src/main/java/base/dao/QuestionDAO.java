package base.dao;

import java.util.List;

import base.bean.Question;

public interface QuestionDAO {
	public List<Question> hae(int id);
	public void talleta(Question question);
}
