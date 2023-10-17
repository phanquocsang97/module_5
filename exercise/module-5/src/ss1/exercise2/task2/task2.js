const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: `American`,
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};
//
// const student = [person.firstName,person.gender,person.education.degree,person.languages];
// const newStudent = [...student];
// console.log("firstName :" + newStudent.f )
const {firstName, gender, education: {degree}} = person;
const student = {firstName, gender, degree, english: "English"};
console.log(student)