package base.dao;

import java.util.List;

import base.bean.Poll;
import base.bean.Question;


public interface PollDAO {
	public List<Poll> haeKaikki();// kaikkien kyselyiden haku
	public List<Poll> hae(int Id); //yhden kyselyn haku
	public void talleta(Poll poll); // uuden kyselyn talletus tietokantaan
}
