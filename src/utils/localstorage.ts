
export const setQuizCompletedLocal = ():void => {
  const quizCompleted = true;
  localStorage.setItem("quizCompleted",JSON.stringify(quizCompleted))
}
export const checkQuizLocalStorage = ():boolean => {
    const result = localStorage.getItem("quizCompleted");
    const quizStatus = result ? JSON.parse(result) : '';
    if(quizStatus){
        return quizStatus;
    }
    return false;
}
export const removeQuizLocalStorage = ():void => {
    localStorage.removeItem("quizCompleted");
}