import React, { useState } from 'react';
import { fetchQuizQuestions } from './API'
import { Difficulty } from './API'


import Questionscard from './components/Questionscard'

const TOTAL_QEUSTIONS = 10;

function App() {

  const [loading, setLaoding] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QEUSTIONS, Difficulty.EASY))


  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1> React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>New question is loading</p>
      {/* <Questionscard
        questionNr={number + 1}
        totalQuestions={TOTAL_QEUSTIONS}
        questions={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next question
      </button>
    </div>
  );
}

export default App;
