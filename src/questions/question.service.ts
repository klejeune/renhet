import Question from "./question";
import QuestionState from "./questionState";

export default class QuestionService {
    public getAllQuestions(): Question[] {
        return [
            new Question('Avez-vous déjà ri du malheur de quelqu\'un ?', ['oui', 'non']),
            new Question('Avez vous déjà ri d\'une personne mentalement ou physiquement handicapée ?', ['oui', 'non']),
            new Question('Avez-vous déjà posé un lapin à quelqu\'un ?', ['oui', 'non'])
        ]
    }

    public getNextQuestion(state: QuestionState): Question | null {
        const allQuestions = this.getAllQuestions()

        if (!state.answers?.length) {
            return allQuestions[0]
        }

        const lastQuestionIndex = this.getAllQuestions().findIndex(q => q.name === state.getLastAnswer()?.question.name)

        if (lastQuestionIndex < allQuestions.length) {
            return allQuestions[lastQuestionIndex + 1]
        }
        else {
            return null
        }
    }
}