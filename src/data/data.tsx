import { DataType } from "../models/QuestionModels"

const data:DataType = [
    {
        id:12,
        question: "What is the capital of France?",
        answers: [
            { option: "Berlin", isCorrect: false },
            { option: "Paris", isCorrect: true },
            { option: "Tbilisi", isCorrect: false },
            { option: "Yerevan", isCorrect: false },
        ],
    },
    {
        id:123,
        question: "What is the capital of Germany",
        answers: [
            { option: "Berlin", isCorrect: true },
            { option: "London", isCorrect: false },
            { option: "New York", isCorrect: false },
            { option: "Moscow", isCorrect: false },
        ],
    },
    {
        id:1234,
        question: "What is the capital of Spain",
        answers: [
            { option: "Berlin", isCorrect: false },
            { option: "Paris", isCorrect: false },
            { option: "Madrid", isCorrect: true },
            { option: "Rome", isCorrect: false },
        ],
    },
    {
        id:12345,
        question: "What is the capital of Italy",
        answers: [
            { option: "Baku", isCorrect: false },
            { option: "Paris", isCorrect: false },
            { option: "Sarajevo", isCorrect: false },
            { option: "Rome", isCorrect: true },
        ],
    },
    {
        id:123456,
        question: "დაჩის იდიოტიზმის მაჩვენებელი დღეს",
        answers: [
            { option: "მაღალი", isCorrect: false },
            { option: "დაბალი", isCorrect: false },
            { option: "საშუალო", isCorrect: false },
            { option: "ძალიან მაღალი", isCorrect: true },
        ],
    },
    {
        id:125456,
        question: "დაჩის იდიოტიზმის მაჩვენებელი დღეს",
        answers: [
            { option: "მაღალი", isCorrect: false },
            { option: "დაბალი", isCorrect: false },
            { option: "საშუალო", isCorrect: false },
            { option: "ძალიან მაღალი", isCorrect: true },
        ],
    },
]
export default data
