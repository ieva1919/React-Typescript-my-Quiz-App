import React, { useState } from 'react';
import { fetchQuizQuestions } from './API'
import { QuestionState, Difficulty } from './API'

import Questionscard from './components/Questionscard'

// 57.40

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QEUSTIONS = 10;

function App() {

  const [loading, setLaoding] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const startTrivia = async () => {
    setLaoding(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QEUSTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLaoding(false)

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
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
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QEUSTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="App">
      <h1> React Quiz</h1>
      {
        gameOver || setUserAnswer.length === TOTAL_QEUSTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>) : null
      }
      {!gameOver ? <p className="score">Score:</p> : null}
      {loading && <p>New question is loading</p>}
      {!loading && !gameOver && (
        <Questionscard
          questionNr={number + 1}
          totalQuestions={TOTAL_QEUSTIONS}
          questions={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />)}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QEUSTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next question
        </button>
      ) : null}
    </div>
  );
}

export default App;
