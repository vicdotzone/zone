//Import stuff later
import java.util.ArrayList;

public class TestSort{
	public static final int MAX_STEREOTYPES = Constants.MAX_STEREOTYPES;

	public static void main(String[] args){
		ArrayList<Stereotype> stereotypes = new ArrayList<Stereotype>(MAX_STEREOTYPES);
		int[] comeUp = new int[MAX_STEREOTYPES];
		int[] picked = new int[MAX_STEREOTYPES];

		//init stereotypes like this for now, remove later
		//will need a way to map sid in Option to sid in Stereotype
		String[] reallySuperTempArray = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"};
		for(int j = 0; j < MAX_STEREOTYPES; j++){
			stereotypes.add(new Stereotype(j, reallySuperTempArray[j]));
		}

		//init values to 1 so we never divide by zero
		for(int i = 0; i < MAX_STEREOTYPES; i++){
			comeUp[i] = 1;
			picked[i] = 1;
		}

		//init questions
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
			//IMPORTANT: sId is being generated here and will need to
			//properly correspond with actual random ordering sId later
			tempOptions.add(new Option(i, optionsText[i]));
		}

		return new Question(questionText, tempOptions);
	}

}
