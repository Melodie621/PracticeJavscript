//HELPER FUNCTIONS
function addStudent(studentName, studentAge){
    /*

    */
    let student = {name: studentName, age: studentAge, grades: [], finalGrade: null}
    classroom.students.push(student);
}

function findStudent(name){
    let foundStudent = false;
    for(let i=0; i < classroom.students.length; i++){
        if (classroom.students[i].name == name){
            return i;  
        }
    }
    throw new Error("Student could not be found!")
}

function changeStudentName(oldName, newName){
    let index = findStudent(oldName)
    classroom.students[index].name = newName;
}

function changeStudentAge(name, newAge){
    let index = findStudent(name)
    classroom.students[index].age = newAge;
}

function addGrade(name, grade){
    let index = findStudent(name)
    classroom.students[index].grades.push(grade)
}

function addGrades(name, grades){
    let index = findStudent(name)
    for(const grade of grades){
        classroom.students[index].grades.push(grade)
    }
}

function removeLowestGrade(name){
    let index = findStudent(name)
    if (classroom.students[index].grades.length == 0){
        console.log("No grades to remove");
        return -1; //exit function
    }
    let minimumGrade = Infinity; //Super high number to start so that you can find lowest grade 
    for(const grade of classroom.students[index].grades){
        if (grade < minimumGrade){
            minimumGrade = grade;
        }
    }
    let lowestIndex = classroom.students[index].grades.indexOf(minimumGrade);
    if (lowestIndex != -1){
        classroom.students[index].grades.splice(lowestIndex, 1);
    }
}

function calculateAverageGrades(){
    for(const student of classroom.students){
        let sum = 0;
        for(const grade of student.grades){
            sum += grade;
        }
        student.finalGrade = sum / student.grades.length;
    }
}



/********************************************
TEST CLASSROOM FUNCTIONS --- No Touchy ;)
*********************************************/

let score = 0;
let classroom = {students: []}

function assert(condition, points){
    if(condition){
        score += points;
        return "---Test Passed---";
    }
    else{
        return "****Test Failed****";
    }
}

function classroomTest(expected){
    let result = true;
    for (let i=0; i < expected.length; i++){
        let student = classroom.students[i];
        let expect = expected[i];
        if (student.name != expect.name || student.age != expect.age || student.grades.length != expect.grades.length || student.finalGrade != expect.finalGrade){
            result = false;
            console.log("Students in classroom do not match expected results");
        }
        if (expect.grades.length > 0){
            for (let j=0; j < expect.grades.length; j++){

                if (student.grades[j] != expect.grades[j]){
                    console.log(`Expected: ${expect.grades}, got ${student.grades[j]}`);
                    result = false;
                }
            }
        }
    }

    if (classroom.students.length != expected.length){
        result = false;
        console.log(`mismatch size --- expected class size of ${expected.length}\n`)
    }

    return result;
}

let expected;
//TEST 1 - Check addStudent function (1 Student)
console.log("\n\naddStudent Functionality Test #1 - 1 student")
addStudent("A", 10)
expected = [{name: "A", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 3 - Check addStudent function (3 Students)
console.log("\n\naddStudent Functionality Test #3 - 3 students")
addStudent("B", 11)
addStudent("C", 10)
expected = [{name: "A", age: 10, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 4 - Change information for student
console.log("\n\nchangeStudentName Functionality Test #4")
changeStudentName("A", "D")
expected = [{name: "D", age: 10, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 5 - Change information for student
console.log("\n\nchangeStudentAge Functionality Test #5")
changeStudentAge("D", 15)
expected = [{name: "D", age: 15, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 6 - Add Grade
console.log("\n\naddGrade Functionality Test #6")
addGrade("D", 100)
expected = [{name: "D", age: 15, grades: [100], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score}`);

//TEST 7 - Add Grade
console.log("\n\naddGrade Functionality Test #6")
addGrade("D", 80)
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 8 - Add Grades
console.log("\n\naddGrades Functionality Test #8")
addGrades("B", [70, 80, 100])
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score}`);

//TEST 9 - Add Grades
console.log("\n\naddGrades Functionality Test #9")
addGrades("C", [60, 70, 70, 90])
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [60, 70, 70, 90], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score}`);

//TEST 10 - Remove Lowest Grade
console.log("\n\naddGrades Functionality Test #10")
removeLowestGrade("C");
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [70, 70, 90], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//Test 11 - Report Average Grades
console.log("\n\naddGrades Functionality Test #11")
calculateAverageGrades();
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: 90}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: 250/3}, {name: "C", age: 10, grades: [70, 70, 90], finalGrade: 230/3}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);