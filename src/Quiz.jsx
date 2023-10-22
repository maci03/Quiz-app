import React, { useState } from "react";
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];


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
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Gl", "Au"],
      correctAnswer: "Au",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Which gas do plants absorb from the atmosphere and convert into oxygen during photosynthesis?",
      options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
      correctAnswer: "Amelia Earhart",
    },
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
