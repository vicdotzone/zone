public class Option{
	public String optionText;

	public Option(String optionText){
		this.optionText = optionText;
	}

	public void setText(String optionText){
		this.optionText = optionText;
	}

	public String getText(){
		return this.optionText;
	}
}