export type QuestionType = {
    id:number,
    question: string;
    answers:
    {
        option: string,
        isCorrect: boolean
    }[];
}

export type DataType = QuestionType[]