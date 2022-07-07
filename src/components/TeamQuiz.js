import { current } from "@reduxjs/toolkit";
import {useState} from "react";

function TeamQuiz({questions}) {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [answerChoice, setAnswerChoice] = useState()


    if(questions.length < 1){
        return "Loading..."
    }

// function handleClick(x){
//   setAnswerChoice(x)
// }

function handleClick(e){
  if(e === true){
      setScore(score + 1)
  }
  const nextQuestion = currentQuestion + 1
  if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
  }
  else{
      setShowScore(true)
  }
}


return(
  <div>
          { showScore  ? (
          <div className="score-div"> You scored {score} out of {questions.length} </div>
      ) : (
          <>
          <div className='question-div'>
              <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].question}</div>
          </div>
  
              {questions[currentQuestion].quiz_answer.map((x, i) => 
                  <button 
                      key={i} 
                      onClick={() => handleClick(x.is_correct)}
                  
                  >{x.answer}</button >
              )}
      
      </>
      )
  }

  </div>
)
}

//   return (
//     <div>
//       <h1>***Coming Soon***</h1>
//       <h1>
//         Lets take a quiz to see which AFC Richmond player you are most like.
//       </h1>
  
//       <QuizComponent questions={questions}/>

//       {questions.map((question) => <QuizComponent question={question} key={question.id}/>)}


//     </div>
//   );
// }

export default TeamQuiz;

