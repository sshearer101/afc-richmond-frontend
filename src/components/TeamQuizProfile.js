import React from "react";
function Quiz() {
  console.log("click");
  console.log(questions);
}
//Making an array of questions to be filtered through, probably create a separate list for coaches and players
const questions = [
  {
    question: "Would you consider yourself a player or a coach?",
    answer1: "Player",
    answer1Total: "1",
    answer2: "Coach",
    answer2Total: "2",
  },
  //player questions below
  {
    question: "What position would you play?",
    answer1: "goal keeper",
    answer1Total: "1",
    answer2: "defender",
    answer2Total: "2",
    answer3: "midfielder",
    answer3Total: "3",
    answer4: "Striker",
    answer4Total: "4",
  },
  {
    question: "Are you a selfish player.",
    answer1: "Strongly Agree",
    answer1Total: "1",
    answer3: "Agree",
    answer3Total: "2",
    answer4: "Disagree",
    answer4Total: "3",
  },
  {
    question: "What best describes your typical mood?",
    answer1: "I can't stop smiling!",
    answer1Total: "1",
    answer2: "Generally happy",
    answer2Total: "2",
    answer3: "I'm always grumpy!",
    answer3Total: "3",
  },
  {
    question: "What type of person are you?",
    answer1: "The kind of person that bakes biscuits",
    answer1Total: "1",
    answer2: "The kind that receives baked biscuits",
    answer2Total: "2",
  },
  {
    question: "Is Football Life?",
    answer1: "Yessss it is!",
    answer1Total: "1",
    answer2: "No..... Football is death",
    answer2Total: "2",
  },
  {
    question: "Is Football Life?",
    answer1: "Yessss it is!",
    answer1Total: "1",
    answer2: "No..... Football is death",
    answer2Total: "2",
  },
  // Coaches questions
  {
    question:
      "Do you like chess and constantly find yourself in toxic relationships?",
    answer1: "Yes, I really really do",
    answer1Total: "1",
    answer2: "Nope not me",
    answer2Total: "2",
  },
  {
    question: "would you ever go behind someones back to the media?",
    answer1: "Yes I would call Trent Krim immediately",
    answer1Total: "1",
    answer2: "No I would never do that",
    answer2Total: "2",
  },
];
function TeamQuiz() {
  return (
    <div>
      <h1>
        Lets take a quiz to see which AFC Richmond player you are most like.
      </h1>
      <h2>Click below to see what AFC RIchmond player you would be!</h2>
      <button onClick={Quiz}>Quiz</button>
    </div>
  );
}

export default TeamQuiz;
