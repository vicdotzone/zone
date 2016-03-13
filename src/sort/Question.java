import java.util.ArrayList;

public class Question{
	public int breadth;
	public String questionText;
	public ArrayList<Option> qOptions;

	//Constructors
	public Question(int breadth, String questionText, ArrayList<Option> qOptions){
		this.breadth = breadth;
		this.questionText = questionText;
		this.qOptions = qOptions;
	}

	public Question(String questionText, ArrayList<Option> qOptions){
		//default breadth = 1
		this.breadth = 1;
		this.questionText = questionText;
		this.qOptions = qOptions;
	}

	//Getters and Setters
	public void setOptions(ArrayList<Option> qOptions){
		this.qOptions = qOptions;
	}

	public ArrayList<Option> getOptions(){
		return this.qOptions;
	}

	public void setBreadth(int breadth){
		this.breadth = breadth;
	}

	public int getBreadth(){
		return breadth;
	}

	public void setText(String questionText){
		this.questionText = questionText;
	}

	public String getText(){
		return this.questionText;
	}
}