import { MouseEvent } from "react";
import { ReactElement,useEffect } from "react";
import { QuestionType } from "../models/QuestionModels"
import { reduxDispatch,useReduxSelector } from "../store";
import { submitAnswer,nextQuestion } from "../features/questions/questionsSlice";

interface QuestionsProps {
    questions: QuestionType[];
    activeQuestion: QuestionType,
}

const Questions = ({ questions, activeQuestion }: QuestionsProps) => {
    const dispatch = reduxDispatch();
    const { question, answers, id } = activeQuestion;
    const handleAnswer = (optionChosen:string,isCorrect:boolean,id:number):void=>{
      dispatch(submitAnswer({option:optionChosen,isCorrect,id}));
      dispatch(nextQuestion());
    }
    return (
        <section className="question"><div>
            <div className="question-header">
                <h3>{question}</h3>
            </div>
            <div className="answers-container">
                {answers.map((answer,index): ReactElement => {
                    const { option, isCorrect } = answer
                    return <div className="answer" key={index} onClick={()=>handleAnswer(option,isCorrect,id)}>
                        <p>{option}</p>
                    </div>
                })}
            </div>
        </div>
        </section>
    )
}

export default Questions