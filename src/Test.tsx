import { useEffect, useState } from 'react';
import './App.css';
import QuestionService from './questions/question.service';
import QuestionState from './questions/questionState';
import Question from './questions/question';

function Test() {
    const questionService = new QuestionService();
    const [questionState, setQuestionState] = useState(new QuestionState());
    const [nextQuestion, setNextQuestion] = useState<Question | null>(questionService.getNextQuestion(questionState));

    const answer = (question: Question | null, choice: string) => {
        if (!question) return; // Prevents crashes

        const newState = questionState.addAnswer(question, choice);
        setQuestionState(newState); // Updates questionState and triggers useEffect
        setNextQuestion(questionService.getNextQuestion(newState));
    };

    const reset = () => {
        const newState = new QuestionState()
        setQuestionState(newState);
        setNextQuestion(questionService.getNextQuestion(newState));
    };

    return (
        <div className="Test">
            {nextQuestion ? (
                <div>
                    <h2>{nextQuestion.name}</h2>
                    {nextQuestion.answers.map((a, aIndex) => (
                        <div key={aIndex}>
                            <button onClick={() => answer(nextQuestion, a)}>{a}</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>Il n'y a plus de questions.</p>
                    <p>Réponses :</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Réponse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionState.answers.map((a, aIndex) => (
                                <tr key={aIndex}>
                                    <td>{a.question.name}</td>
                                    <td>
                                        <strong>[{a.choice}]</strong>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Test;
