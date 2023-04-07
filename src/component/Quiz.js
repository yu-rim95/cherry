import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);


  const questions = [
    {
      questionText: "다음 중 당모치의 뜻으로 알맞은것은?",
      answerOptions: [
        { answerText: "당당한 모습의 치와와", isCorrect: false },
        { answerText: "당연히 모든 치킨은 옳다", isCorrect: true },
        { answerText: "당연히 모이면 치킨이지", isCorrect: false },
        { answerText: "당근은 모두 치워버려", isCorrect: false },
      ],
    },
    {
      questionText: "다음 중 '중꺾마'의 뜻으로 알맞은 것은?",
      answerOptions: [
        { answerText: "중요한건 꺾이는 마음", isCorrect: false },
        { answerText: "중요한건 꺾이지 않는 마음", isCorrect: true },
        { answerText: "중식엔 꺾어 마셔", isCorrect: false },
        { answerText: "중요한날엔 꺾이는 마라탕", isCorrect: false },
      ],
    },
    {
      questionText: "다음 중 '오뱅알'은 무엇의 줄임말일까?",
      answerOptions: [
        { answerText: "오! 방금 알았어", isCorrect: false },
        { answerText: "오픈 뱅킹 알림", isCorrect: false },
        { answerText: "오일뱅크 알바생", isCorrect: false },
        { answerText: "오늘 방송 알찼다!", isCorrect: true },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect, index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);

    
    }
    if (isCorrect) {
        setScore(score + 1);
        alert('정답이네요!');
      }else{
        alert('아이고 틀렸네요!');
      }
      
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer !== null) {
      setSelectedAnswer(null);

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-container">
        <h1>아직 준비중이에요!</h1>
      {showScore ? (
        <div className="score-section">
          <div>나의 점수:  {score}점, 문제:{questions.length}</div>
          <button onClick={handleResetButtonClick}>다시 시작하기</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
            <button
                key={index}
                className={`answer-button ${
                selectedAnswer !== null &&selectedAnswer === index &&
                (answerOption.isCorrect ? "correct" : "incorrect")
                }`}
                onClick={() =>
                handleAnswerButtonClick(answerOption.isCorrect, index)
                }
                >
                {answerOption.answerText}
                </button>
                    )
                    )}
           </div>
            {selectedAnswer !== null && (
            <button onClick={handleNextButtonClick}>
            {currentQuestion === questions.length - 1 ? "결과 보기" : "다음 문제"}
            </button>
            )}
        </div>
    )}
    </div>
        );
    };
                    
export default Quiz;