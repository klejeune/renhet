import Answer from "./answer";
import Question from "./question";

export default class QuestionState {
    public answers: Answer[];

    public constructor(answers: Answer[] = []) {
        this.answers = answers
    }

    public addAnswer(question: Question, choice: string) {
        return new QuestionState([... this.answers, new Answer(question, choice)])
    }

    public getLastAnswer() {
        if (!this.answers.length) {
            return null
        }

        return this.answers[this.answers.length - 1]
    }
}