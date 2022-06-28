//CLASSROOM FUNCTIONS - YOU WILL EDIT THESE
function addStudent(studentName, studentAge){
    /*
    This function will add a student to your classroom
    Params:
        studentName : String - The name of the student
        studentAge : Number - The age of the student
    Returns:
        None
    */
    let student = {name: studentName, age: studentAge, grades: [], finalGrade: null}
    classroom.students.push(student);
}

function changeStudentName(oldName, newName){
    /*
    This function will change a student's name in your classroom
    Params:
        oldName : String - Old name of student
        newName : String - New name of student that will replace old name
    Returns:
        None
    */
    let index = findStudent(oldName)
    classroom.students[index].name = newName;
}

function changeStudentAge(name, newAge){
    /*
    This function will change a student's age in your classroom
    Params:
        name : String - Name of student
        newAge : Number - New age of student that will replace old age
    Returns:
        None
    */
    let index = findStudent(name)
    classroom.students[index].age = newAge;
}

function addGrade(name, grade){
    /*
    This function will add a grade in a student's list of grades in your classroom
    Params:
        name : String - Name of student
        grade : Number - New grade for the student
    Returns:
        None
    */
    let index = findStudent(name)
    classroom.students[index].grades.push(grade)
}

function addGrades(name, grades){
    /*
    This function will add a list of grades in a student's list of grades in your classroom
    Params:
        name : String - Name of student
        grades : [Numbers] - New grade for the student
    Returns:
        None
    */
    let index = findStudent(name)
    for(const grade of grades){
        classroom.students[index].grades.push(grade)
    }
}

function removeLowestGrade(name){
    /*
    This function will remove the lowest grade for a student in your classroom
    Params:
        name : String - Name of the student you wish to remove the lowest grade for
    Returns:
        None
    */
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
    /*
    This function will compute the average grades for each student based on their current scores and place them as their final grade respectively
    Params:
        None
    Returns:
        None
    */
    for(const student of classroom.students){
        let sum = 0;
        for(const grade of student.grades){
            sum += grade;
        }
        student.finalGrade = sum / student.grades.length;
    }
}

/********************************************
HELPER FUNCTION FOR YOUR USE --- No Touchy ;)
*********************************************/
function findStudent(name){
    let foundStudent = false;
    for(let i=0; i < classroom.students.length; i++){
        if (classroom.students[i].name == name){
            return i;  
        }
    }
    throw new Error("Student could not be found!")
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
    if (classroom.students.length != expected.length){
        return false;
        console.log(`mismatch size --- expected class size of ${expected.length}\n`)
    }

    for (let i=0; i < expected.length; i++){
        let student = classroom.students[i];
        let expect = expected[i];
        if (student.name != expect.name || student.age != expect.age || student.grades.length != expect.grades.length || student.finalGrade != expect.finalGrade){
            return false;
            console.log("Students in classroom do not match expected results");
        }
        if (expect.grades.length > 0){
            for (let j=0; j < expect.grades.length; j++){

                if (student.grades[j] != expect.grades[j]){
                    console.log(`Expected: ${expect.grades}, got ${student.grades[j]}`);
                    return false;
                }
            }
        }
    }
    return true;
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