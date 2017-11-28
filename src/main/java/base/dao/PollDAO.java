package base.dao;

import java.util.List;

import base.bean.Poll;


public interface PollDAO {
	public List<Poll> haeKaikki();// kaikkien kyselyiden haku
	public List<Poll> hae(int id); //yhden kyselyn haku
	public void talleta(Poll poll); // uuden kyselyn talletus tietokantaan
	public void poista(int id);
	public void paivita(Poll poll);
}
