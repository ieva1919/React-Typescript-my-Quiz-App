import React from 'react'
import { AnswerObject } from '../App'

type Props = {
    questions: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: AnswerObject;
    questionNr: number;
    totalQuestions: number;

}


const Questionscard: React.FC<Props> = ({ questions, answers, callback, userAnswer, questionNr, totalQuestions }) => (

    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: questions }} />
        <div>
            {(answers || []).map((answer) => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default Questionscard;