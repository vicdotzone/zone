public class Option{
	public int sId;
	public String optionText;

	//Constructors
	public Option(int sId, String optionText){
		this.sId = sId;
		this.optionText = optionText;
	}

	//Getters and Setters
	public void setId(int sId){
		this.sId = sId;
	}

	public int getId(){
		return this.sId;
	}

	public void setText(String optionText){
		this.optionText = optionText;
	}

	public String getText(){
		return this.optionText;
	}

	
}
