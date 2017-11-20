package base.dao;

import java.util.List;

import base.bean.Answer;

public interface AnswerDAO {
	public List<Answer> haeKaikki(int kyselyId);	
	public List<Answer> hae(int kyselyId, int kysymysId);
	public void talleta(Answer answer);
}
