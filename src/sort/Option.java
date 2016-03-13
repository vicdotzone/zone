public class Option{
	public String optionText;
	public int sId;

	//Constructors
	public Option(String optionText){
		this.optionText = optionText;
	}

	//Getters and Setters
	public void setText(String optionText){
		this.optionText = optionText;
	}

	public String getText(){
		return this.optionText;
	}
}
