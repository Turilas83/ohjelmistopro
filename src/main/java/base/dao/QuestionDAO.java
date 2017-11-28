package base.dao;

import java.util.List;

import base.bean.Question;

public interface QuestionDAO {
	public List<Question> hae(int id);
	public void talleta(Question question);
	public void muokkaa(Question question);
	public void poista(int id, int kyselyId);
}
