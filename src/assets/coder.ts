// const isObj = <T>(arg: T): boolean => {
//     return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
// };
// // const isTrue = <T>(arg:T):{arg: T, is:boolean} => {
// //     if(Array.isArray(arg) && !arg.length){
// //         return {arg,is:false}
// //     }
// //     if(isObj(arg) && !Object.keys(arg  as keyof T).length){
// //         return {arg, is:false}
// //     }
// //     return {arg, is :!!arg}
// // }
// interface Boolcheck<T> {
//     value: T,
//     is: boolean
// }
// const isTrue = <T>(arg: T): Boolcheck<T> => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { value: arg, is: false }
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { value: arg, is: false }
//     }
//     return { value: arg, is: !!arg }
// }

// interface hasID {
//     id: number
// }

// const processUser = <T extends hasID>(user: T): boolean => {
//     return typeof (user) === 'string'
// }
// const obj = {
//     id: 123123,
//     name: 'adsf'
// }
// console.log(processUser(obj));
// export interface Assignment {
//     studentId: string,
//     title: string,
//     grade: number,
//     verified?: boolean
// }
// const updateAssignment = (assign: Assignment, toUpdate: Partial<Assignment>): Assignment => {
//     return { ...assign, ...toUpdate }
// }
// const hexColorFormatter : Record<string,string> ={
//   red:'asdassd',
//   green: 'sdasds',
//   blue:'asda',
// }
// type student = "sara" | 'nicolas'
// type grades = "A" | "B" | "C" | "D" | "U"

// const givenGrades : Record<student,grades> = {
//   sara:"A",
//   nicolas:"U"
// }

// const createNewAssign = (title:string,points:number) => {
//     return {title,points}
// }
// type newAssign = ReturnType<typeof createNewAssign>;


// export { isObj, isTrue, processUser, updateAssignment }
