package base.bean;

public class Question {
	int kysymysId;
	String kysymys;
	int kyselyId;
	
	public Question() {
		this.kysymysId = 0;
		this.kysymys = null;
		this.kyselyId = 0;
	}
	
	public Question(int kysymysid, int kyselyid, String kysymys) {
		super();
		this.kysymysId = kysymysid;
		this.kysymys = kysymys;
		this.kyselyId = kyselyid;
	}

	public int getKyselyid() {
		return kyselyId;
	}

	public void setKyselyid(int kyselyid) {
		this.kyselyId = kyselyid;
	}

	public int getKysymysId() {
		return kysymysId;
	}

	public void setKysymysId(int kysymysId) {
		this.kysymysId = kysymysId;
	}

	public String getKysymys() {
		return kysymys;
	}

	public void setKysymys(String kysymys) {
		this.kysymys = kysymys;
	}
	
	
	
	
}
