import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data/data";
import { QuestionType } from "../../models/QuestionModels";
import { } from "../../utils/localstorage";

type InitialStateType = {
    questions: QuestionType[],
    activeQuestion: QuestionType,
    totalQuestions:number,
    activeQuestionIndex: number,
    questionsTotalCount: number,
    answersSubmitted: number,
    correctAnswers: number,
    incorrectAnswers: number,
    hintsUsed: number,
    maxHints: number,
}
type SubmitAnswerPayloadType = {
    option: string,
    isCorrect: boolean,
    id: number,
}
const initialState: InitialStateType = {
    questions: data,
    activeQuestion: data[0],
    totalQuestions:data.length,
    activeQuestionIndex: 0,
    questionsTotalCount: data.length,
    answersSubmitted: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    hintsUsed: 0,
    maxHints: 3,
};

const quizSlice = createSlice({
    name: "quizSlice",
    initialState,
    reducers: {
        nextQuestion: (state): void => {
            const { questions, activeQuestionIndex, answersSubmitted, questionsTotalCount } = state;
            if (answersSubmitted <= questionsTotalCount) {
                if (activeQuestionIndex < questions.length - 1) {
                    state.activeQuestionIndex++;
                    state.activeQuestion = questions[state.activeQuestionIndex];
                } else {
                    state.activeQuestionIndex = 0;
                    state.activeQuestion = questions[state.activeQuestionIndex];
                }
            }else{
                state.activeQuestionIndex = 0;
                state.activeQuestion = questions[state.activeQuestionIndex];
            }
        },
        submitAnswer: (state, action: PayloadAction<SubmitAnswerPayloadType>): void => {
            const {isCorrect, id } = action.payload;
            const renewedQuestions = state.questions.filter((question) => question.id !== id)
            state.questions = renewedQuestions;
            state.activeQuestionIndex--;
            state.questionsTotalCount = renewedQuestions.length;
            state.answersSubmitted++;
            if(isCorrect){
                state.correctAnswers++;
            }
        },
        resetQuiz : () : InitialStateType => {
         return {...initialState}
        }
    },
    extraReducers: (builder) => {
    },
});
export const {
    nextQuestion,
    submitAnswer,
    resetQuiz
} = quizSlice.actions;
export default quizSlice.reducer;