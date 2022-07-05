import { current } from "@reduxjs/toolkit";
import {useState} from "react";

function TeamQuiz({questions}) {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const [answer, setAnswer] = useState()

    if(questions.length < 1){
        return "Loading..."
    }


console.log(questions)


function handleAnswer(x){
  console.log(x)
//   if(x === true){
//       setScore(score + 1)
//   }
//   const nextQuestion = currentQuestion + 1
//   if(nextQuestion < questions.length){
//       setCurrentQuestion(nextQuestion)
//   }
//   else{
//       setShowScore(true)
//   }
}

const quiz_answers = questions[currentQuestion].quiz_answer 

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
          <div className='answer-div'>
            <form onSubmit={handleAnswer}>
              <input
                type="button"
                // value={questions[currentQuestion].quiz_answer.answer_one}
                onClick={()=>setAnswer(questions[currentQuestion].quiz_answer.answer_one)}
              >
              </input>
            </form>
    
            {/* <input>{questions[currentQuestion].quiz_answer.answer_one}</input>
              <input>{questions[currentQuestion].quiz_answer.answer_two}</input>
              <input>{questions[currentQuestion].quiz_answer.answer_three}</input>
              <input>{questions[currentQuestion].quiz_answer.answer_four}</input> */}


              
              {/* {Object.keys(quiz_answers).map(function(k, i){
              })} */}

              {/* {questions[currentQuestion].quiz_answer.map((x, i) => 
                  <button 
                      key={i} 
                      onClick={() => handleAnswer(x.isCorrect)}
                  
                  >{x.quiz_answer}</button>
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

