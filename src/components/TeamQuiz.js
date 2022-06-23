import {useState, useEffect} from "react";
import QuizComponent from "./QuizComponent";

function TeamQuiz() {

  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

useEffect(() =>
fetch (`/quiz_questions`)
  .then((res) => res.json())
  .then((json) => setQuestions(json))
, [], 
);


function handleAnswer(x){
  if(x === true){
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
console.log(questions[currentQuestion])

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
              {/* <div className='question-text'>{questions[currentQuestion].question}</div> */}
          </div>
          <div className='answer-div'>
              {/* {questions[currentQuestion].answerOptions.map((x, i) => 
                  <button 
                      key={i} 
                      onClick={() => handleAnswer(x.isCorrect)}
                  
                  >{x.answerText}</button>
              )} */}
          </div>
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

