import Questions from "../components/Questions"
import { reduxDispatch, useReduxSelector } from "../store";
import { nextQuestion,resetQuiz} from "../features/questions/questionsSlice";
import {setQuizCompletedLocal,checkQuizLocalStorage,removeQuizLocalStorage } from "../utils/localstorage";

const Quiz = () => {
    const {questions,activeQuestion,answersSubmitted,totalQuestions} = useReduxSelector((store)=>store.quiz)
    const dispatch = reduxDispatch();
    const checkForCompletion = checkQuizLocalStorage();
    console.log(checkForCompletion);
    const resetClickHandler = () : void => {
       removeQuizLocalStorage();
       dispatch(resetQuiz())
       window.location.reload();
    }
    if(checkForCompletion){
      return <main>
        <h2>You have already completed the quiz. do you want to reset?</h2>
        <button onClick={resetClickHandler}>Reset</button>
      </main>
    }
    if(answersSubmitted === totalQuestions){
      setQuizCompletedLocal();
      return <main className="quiz">
        <h4>Congrats</h4>
      </main>
    }
  return (
   <main className="quiz">
    <h2>There you have the most sophisticated quiz there is</h2>
    {/* questions and anwsers */}
    <Questions questions={questions} activeQuestion={activeQuestion}/>
    {/* questions dots */}
    {/* skip question, get a hint */}
    <div className="additional-buttons">
    <button onClick={()=>dispatch(nextQuestion())}> Next Queston -</button>
    <button> Hint</button>
    </div>
    <div className="reset">
      <button onClick={resetClickHandler}>Reset</button>
    </div>
   </main>
  )
}
export default Quiz