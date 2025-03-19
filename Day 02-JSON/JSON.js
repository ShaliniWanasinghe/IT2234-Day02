//{key:value}

/*
console.log("Example 1")

let student = {regno: '2021/ICT/01', name: 'James', age:21, course:'IT', skills:['Java',"JS",'C++']}
console.log(student)
console.log(student.name)

let students =[{regno: '2021/ICT/01', name: 'James', age:21, course:'IT'},
{regno: '2021/ICT/02', name: 'Ravi', age:22, course:'IT'},
{regno: '2021/ICT/03', name: 'Jaya', age:21, course:'IT'},
]

console.log(students)
*/
console.log("Practice Exercise")

//Define 10 studens
//store it in an array
let students = [
    { regno: '2021/ICT/01', name: 'Shalini', age: 23, course: 'IT', gender: 'Female', gpa: 4.0 },
    { regno: '2021/ICT/02', name: 'Ravija', age: 24, course: 'IT', gender: 'Male', gpa: 3.8 },
    { regno: '2021/ICT/03', name: 'Preena', age: 22, course: 'IT', gender: 'Female', gpa: 3.9 },
    { regno: '2021/ICT/04', name: 'Danushan', age: 22, course: 'CS', gender: 'Male', gpa: 2.0 },
    { regno: '2021/ICT/05', name: 'Saranjana', age: 25, course: 'IT', gender: 'Female', gpa: 3.0 },
    { regno: '2021/ICT/06', name: 'Alexa', age: 25, course: 'CS', gender: 'Female', gpa: 3.2 },
    { regno: '2021/ICT/07', name: 'Jayanthi', age: 24, course: 'IT', gender: 'Female', gpa: 2.2 },
    { regno: '2021/ICT/08', name: 'Emma', age: 22, course: 'IT', gender: 'Female', gpa: 3.6 },
    { regno: '2021/ICT/09', name: 'Loshan', age: 23, course: 'CS', gender: 'Male', gpa: 3.5 },
    { regno: '2021/ICT/10', name: 'Oshani', age: 22, course: 'IT', gender: 'Female', gpa: 2.5 }
];


// Find the female students
let femaleStudents = students.filter(student => student.gender === 'Female');
console.log("Female Students:");
console.log(femaleStudents);

//Find the students who are following the IT course
let itStudents = students.filter(student => student.course === 'IT');
console.log("IT Students:");
console.log(itStudents);

//Find the maximum and average GPA among the students
let gpas = students.map(student => student.gpa); 
let maxGPA = Math.max(...gpas); 
let averageGPA = gpas.reduce((sum, gpa) => sum + gpa, 0) / gpas.length; 

console.log("Maximum GPA:", maxGPA);
console.log("Average GPA:", averageGPA.toFixed(2)); 