package base.bean;

import java.util.Date;

import javax.validation.constraints.Pattern;

public class Answer {
	private int ansId = 0;
	private int pollId = 0;
	private int questionId = 0;
	
	@Pattern(regexp = "\\w[a-zA-Z_0-9]")
	private String answer = null;
	
	private Date stamp = null;
	
	public Answer() {
		this.ansId = 0;
		this.pollId = 0;
		this.questionId = 0;
		this.answer = null;
		this.stamp = null;
	}
	
	public Answer(int ansId, int pollId, int questionId, String answer, Date stamp) {
		super();
		this.ansId = ansId;
		this.pollId = pollId;
		this.questionId = questionId;
		this.answer = answer;
		this.stamp = stamp;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Date getStamp() {
		return stamp;
	}

	public void setStamp(Date stamp) {
		this.stamp = stamp;
	}

	public int getAnsId() {
		return ansId;
	}
	
	public void setAnsId(int ansId) {
		this.ansId = ansId;
	}
	public int getPollId() {
		return pollId;
	}
	public void setPollId(int pollId) {
		this.pollId = pollId;
	}
	public int getQuestionId() {
		return questionId;
	}
	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}
}

