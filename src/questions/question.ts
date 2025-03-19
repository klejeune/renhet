export default class Question {
    public name: string
    public answers: string[]

    public constructor(name: string, answers: string[]) {
        this.name = name
        this.answers = answers
    }
}