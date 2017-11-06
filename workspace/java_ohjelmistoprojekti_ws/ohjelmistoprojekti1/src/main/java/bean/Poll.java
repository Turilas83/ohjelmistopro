package bean;

public class Poll {
	private int id;
	private String name;
	private boolean published;
	
	public Poll() {
		super();
		this.id = 0;
		this.name = null;
	}

	
	public Poll(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Poll(int id, String name, boolean published) {
		super();
		this.id = id;
		this.name = name;
		this.published = published;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isPublished() {
		return published;
	}
	public void setPublished(boolean published) {
		this.published = published;
	}
	public boolean getPublished() {
		return published;
	}
	@Override
	public String toString() {
		return "KyselyImpl [id=" + id + ", name=" + name + ", published=" + published + "]";
	}
	
	
}