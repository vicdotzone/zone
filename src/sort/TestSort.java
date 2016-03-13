//Import stuff later
import java.util.ArrayList;

public class TestSort{

	public static void main(String[] args){
		ArrayList<Question> Questions = generateQuestions();
		
		int qlength = Questions.size();
		for(int i = 0; i < qlength; i++){
			Question thisQuestion = Questions.get(i);
			System.out.println(thisQuestion.getText());
			
			int olength = thisQuestion.getOptions().size();
				for(int j = 0; j < olength; j++){
					System.out.println(thisQuestion.getOptions().get(j).getText());
				}

		}
	}

	




	/* -- Temporary methods to generate questions with hardcoded values -- */

	private static ArrayList<Question> generateQuestions(){
		ArrayList<Question> TempQuestions = new ArrayList<Question>();
		int i = 0;
		
		//Terrible implementation of questions whyyyy 
		TempQuestions.add(makeQuestion("What option do you like?", 
			new String[] {"A", "B", "C", "D"}));

		return TempQuestions;
	}

	private static Question makeQuestion(String questionText, String[] optionsText){
		ArrayList<Option> TempOptions = new ArrayList<Option>();
		
		int length = optionsText.length;
		for(int i = 0; i < length; i++){
			TempOptions.add(new Option(optionsText[i]));
		}

		return new Question(questionText, TempOptions);
	}

}
