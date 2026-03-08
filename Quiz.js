import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What is the safe pH range for drinking water?",
    options: ["5.0 – 6.0", "6.5 – 8.5", "8.5 – 10.0", "4.0 – 5.5"],
    answer: "6.5 – 8.5",
  },
  {
    question: "Which of these indicates water turbidity?",
    options: ["How clear the water is", "pH level", "TDS content", "Temperature"],
    answer: "How clear the water is",
  },
  {
    question: "TDS stands for:",
    options: ["Total Dissolved Salts", "Total Dissolved Solids", "Total Dry Substances", "Total Density Score"],
    answer: "Total Dissolved Solids",
  },
  {
    question: "What should you do if tap water is unsafe?",
    options: ["Drink directly", "Boil or filter before drinking", "Mix with mineral water", "Use for bathing"],
    answer: "Boil or filter before drinking",
  },
  {
    question: "Which water source is usually safest?",
    options: ["Mineral water from tested plant", "River water", "Rainwater without treatment", "Tap water from unknown source"],
    answer: "Mineral water from tested plant",
  },
  {
    question: "High turbidity in water indicates:",
    options: ["Water is clean", "Water has particles & may be contaminated", "pH is balanced", "TDS is low"],
    answer: "Water has particles & may be contaminated",
  },
  {
    question: "What is a sign of unsafe water?",
    options: ["Clear and colorless", "Strange odor or taste", "Low turbidity", "Balanced pH"],
    answer: "Strange odor or taste",
  },
  {
    question: "Boiling water helps to:",
    options: ["Remove salts", "Kill harmful microbes", "Reduce TDS", "Increase turbidity"],
    answer: "Kill harmful microbes",
  },
  {
    question: "Why is water testing important?",
    options: ["To check pH, turbidity, TDS", "To make water taste better", "To color the water", "To increase flow"],
    answer: "To check pH, turbidity, TDS",
  },
  {
    question: "Which factor does NOT determine water safety?",
    options: ["pH", "TDS", "Turbidity", "Container color"],
    answer: "Container color",
  },
];

export default function WaterQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      if (selectedOption === quizQuestions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setShowAnswer(true);
    }
  };

  const handleNext = () => {
    setSelectedOption("");
    setShowAnswer(false);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowAnswer(false);
    setShowResult(false);
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        background: "#caf0f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "#B3E5FC",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#01579B", marginBottom: "20px" }}>
          💧 Water Safety Quiz
        </h2>

        {!showResult ? (
          <div>
            {/* Question counter */}
            <p style={{ textAlign: "right", color: "#01579B", fontWeight: "bold", margin: "0 0 10px 0" }}>
              {currentQuestion + 1} / {quizQuestions.length}
            </p>

            <h3 style={{ color: "#0277BD" }}>
              {quizQuestions[currentQuestion].question}
            </h3>
            {quizQuestions[currentQuestion].options.map((option, idx) => (
              <div key={idx} style={{ margin: "8px 0" }}>
                <label style={{ cursor: "pointer", color: "#01579B" }}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    disabled={showAnswer}
                    style={{ marginRight: "8px" }}
                  />
                  {option}
                </label>
              </div>
            ))}

            {!showAnswer ? (
              <button
                onClick={handleSubmit}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "none",
                  backgroundColor: "#00b4d8",
                  color: "#caf0f8",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            ) : (
              <div>
                <p style={{ fontWeight: "bold", color: selectedOption === quizQuestions[currentQuestion].answer ? "green" : "red" }}>
                  Correct Answer: {quizQuestions[currentQuestion].answer}
                </p>
                <button
                  onClick={handleNext}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "50px",
                    border: "none",
                    backgroundColor: "#0077b6",
                    color: "#caf0f8",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "#01579B" }}>
            <h3>Your Score: {score} / {quizQuestions.length}</h3>
            <p style={{ color: "#0277BD", fontWeight: "bold" }}>
              {score === quizQuestions.length ? "Excellent! 💧" : "Keep Learning! 💦"}
            </p>
            <button
              onClick={handleRestart}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#00b4d8",
                color: "#caf0f8",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
