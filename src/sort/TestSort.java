//Import stuff later
import java.util.ArrayList;

public class TestSort{

	public static void main(String[] args){
		ArrayList<Question> questions = generateQuestions();
		
		int qlength = questions.size();
		for(int i = 0; i < qlength; i++){
			Question thisQuestion = questions.get(i);
			System.out.println(thisQuestion.getText());
			
			int olength = thisQuestion.getOptions().size();
				for(int j = 0; j < olength; j++){
					System.out.println(thisQuestion.getOptions().get(j).getText());
				}

		}
	}

	




	/* -- Temporary methods to generate questions with hardcoded values -- */

	private static ArrayList<Question> generateQuestions(){
		ArrayList<Question> tempQuestions = new ArrayList<Question>();
		int i = 0;
		
		//Terrible implementation of questions whyyyy 
		tempQuestions.add(makeQuestion("What option do you like?", 
			new String[] {"A", "B", "C", "D"}));

		return tempQuestions;
	}

	private static Question makeQuestion(String questionText, String[] optionsText){
		ArrayList<Option> tempOptions = new ArrayList<Option>();
		
		int length = optionsText.length;
		for(int i = 0; i < length; i++){
			tempOptions.add(new Option(optionsText[i]));
		}

		return new Question(questionText, tempOptions);
	}

}
