import { useState }from "react";

export default function QuizComponent({questions}){

return(
    <div>
        
    </div>
)

//first question of the array rendered in h1 tag
//first question's answers all rendered in buttons
//keep answer selected in state
//button to change question and answers to the next in the array
    
// const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].quiz_answer.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>sdfasf</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
}