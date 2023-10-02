// src/Quiz.js
import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    // Add more questions here
  ];

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
    }

    setUserAnswer(selectedOption);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
      setUserAnswer("");
    } else {
      setFeedback("Quiz Complete!");
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Quiz Title</h1>
      <div className="question-container">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={userAnswer !== ""}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="feedback-container">
        <p>{feedback}</p>
      </div>
      <button onClick={handleNextQuestion} disabled={userAnswer === ""}>
        Next
      </button>
      {currentQuestionIndex === quizQuestions.length - 1 && (
        <p>Your Score: {score} out of {quizQuestions.length}</p>
      )}
    </div>
  );
};

export default Quiz;
