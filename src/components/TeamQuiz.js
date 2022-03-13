import React from "react";
import QuizComponent from "./QuizComponent";

function TeamQuiz({questions}) {

  // const quizAnswers = questions[0].quiz_answers



console.log(questions[0])

  return (
    <div>
      <h1>***Coming Soon***</h1>
      <h1>
        Lets take a quiz to see which AFC Richmond player you are most like.
      </h1>
      {/* {quizAnswers.map((answer) => {
        <QuizComponent answer={answer} key={answer.id}/>
      })} */}
    {questions[0].quiz_answers.map((question) => {
<QuizComponent question={question} key={question.id}/>
  })}
    </div>
  );
}

export default TeamQuiz;

