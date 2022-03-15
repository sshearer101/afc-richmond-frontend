import React from "react";
import QuizComponent from "./QuizComponent";

function TeamQuiz({questions}) {


  return (
    <div>
      <h1>***Coming Soon***</h1>
      <h1>
        Lets take a quiz to see which AFC Richmond player you are most like.
      </h1>
  
      <QuizComponent questions={questions}/>

      {/* {questions.map((question) => <QuizComponent question={question} key={question.id}/>)} */}


    </div>
  );
}

export default TeamQuiz;

