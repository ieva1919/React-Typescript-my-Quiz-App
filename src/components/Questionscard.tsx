import React from 'react'
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './Questionscard.style'

type Props = {
    questions: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: AnswerObject;
    questionNr: number;
    totalQuestions: number;

}


const Questionscard: React.FC<Props> = ({ questions, answers, callback, userAnswer, questionNr, totalQuestions }) => (

    <Wrapper>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: questions }} />
        <div>
            {(answers || []).map((answer) => (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)

export default Questionscard;