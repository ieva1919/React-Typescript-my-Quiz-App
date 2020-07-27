import React, { useState } from 'react';
import { fetchQuizQuestions } from './API'
import { QuestionState, Difficulty } from './API'

import Questionscard from './components/Questionscard'
import { GlobalStyle, Wrapper } from './App.style'



export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QEUSTIONS = 10;

function App() {

  const [loading, setLaoding] = useState(true)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(-1)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)


  const startTrivia = async () => {
    setLaoding(true)
    setNumber(0)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QEUSTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswer([])
    setLaoding(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value
    const correct = questions[number].correct_answer === answer
    if (correct) setScore(prev => prev + 1)
    const AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer
    }
    setUserAnswer((prev) => [...prev, AnswerObject])

    if (number === TOTAL_QEUSTIONS - 1) {
      setNumber(TOTAL_QEUSTIONS)
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    setNumber(nextQuestion)
  }

  const gameOver = number === TOTAL_QEUSTIONS

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="background">
          <h1> React Quiz</h1>
          {
            (gameOver || number === -1) ? (
              <button className="start" onClick={startTrivia}>
                Start
              </button>) :
              null
          }
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {number === 0 && loading && <p>New question is loading</p>}
          {gameOver &&
            <div>
              <h2>Your game session is already finished!</h2>
              <h3>Your score is {score}</h3>
              <button className="start" onClick={startTrivia}>
                New game
              </button>
            </div>
          }
          {!loading && !gameOver && (
            <Questionscard
              questionNr={number + 1}
              totalQuestions={TOTAL_QEUSTIONS}
              questions={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswer ? userAnswer[number] : undefined}
              callback={checkAnswer}
            />)}
          {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QEUSTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next question
            </button>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
