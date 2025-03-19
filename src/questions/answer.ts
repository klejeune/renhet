import Question from "./question";

export default class Answer {
    public readonly question: Question;
    public readonly choice: string;

    public constructor(question: Question, choice: string) {
        this.question = question
        this.choice = choice
    }
}