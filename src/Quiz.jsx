import React, {useState} from "react";

const Quiz = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score,setScore] = useState(0);
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
        // დანარჩენი კითხვები
      ];

    const HandleOptionClick = (selectedOption) =>{
        const currentQuestion = quizQuestions[currentQuestionIndex];
    }

    if(selectedOption === currentQuestion.correctAnswer){
        setScore(score + 1)
        setFeedback("Correct!");
    }else{
        setFeedback(`incorrect. the correct answer is: ${currentQyestion.correctAnswer} `);
    }
    setUserAnswer(selectedOption);


}