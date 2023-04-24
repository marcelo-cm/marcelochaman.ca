import React, { useState } from "react";
import stylesheets from "../stylesheets/QueensPurity.module.css";

function Quiz() {
  const [page, setPage] = useState("questions");
  const [questions, setQuestions] = useState([
    { id: 1, text: "Do you like pizza?", answer: false },
    { id: 2, text: "Do you enjoy hiking?", answer: false },
    { id: 3, text: "Do you have a pet?", answer: false },
    {
      id: 4,
      text: "Have you traveled outside your home country?",
      answer: false,
    },
    { id: 5, text: "Do you prefer sweet or salty snacks?", answer: false },
  ]);
  const [score, setScore] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === false) count++;
    }
    setScore(count);
    setPage("score");
  }

  function handleAnswerChange(id, value) {
    const newQuestions = [...questions];
    const index = newQuestions.findIndex((q) => q.id === id);
    newQuestions[index].answer = value;
    setQuestions(newQuestions);
  }

  return (
    <div className={stylesheets.body}>
      {page === "questions" ? (
        <div className={stylesheets.index}>
          <h2>QueensPurity</h2>
          <form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div key={q.id}>
                <p>{q.id}. </p>
                <input
                  type="checkbox"
                  checked={q.answer === true}
                  onChange={(e) => handleAnswerChange(q.id, e.target.checked)}
                />
                <p>{q.text}</p>
              </div>
            ))}
            <button className={stylesheets.submitbutton} type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : page === "score" ? (
        <div>
          {score > 0 && <p>Your Score Is: {score}.</p>}
          <button
            className={stylesheets.submitbutton}
            type="submit"
            onClick={() => setPage("questions")}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div>you broke my website</div>
      )}
    </div>
  );
}

export default Quiz;
