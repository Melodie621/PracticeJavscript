let classroom = {students: []}

//CLASSROOM FUNCTIONS - YOU WILL EDIT THESE
function addStudent(studentName, studentAge){
    /*
    This function will add a student to your classroom. (HINT: Your classroom is a list of students)

    A student should be an object with the following keys:
        name : string
        age : string
        grades : []
        finalGrade : null
    
    For example, a student could be this -> {name: 'A', age: 10, grades: [], finalGrade: null}

    After you create a student, you will need to push it into your classroom.

    Params:
        studentName : String - The name of the student
        studentAge : Number - The age of the student
    Returns:
        None
    */
    
    // TODO: Place your code here
    let student = {name: studentName, age: studentAge, grades: [], finalGrade: null};
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
    
    // TODO: Place your code here
//     for (let i = 0; i<classroom.students.length; i++){
//         if (classroom.students[i].name === oldName){
//             classroom.students[i].name = newName;
//         }
//     }

// }
    classroom.students[findStudent(oldName)].name = newName;
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
    
    // TODO: Place your code here
    classroom.students[findStudent(name)].age= newAge;
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
    
    // TODO: Place your code here
    classroom.students[findStudent(name)].grades.push(grade);

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
    
    // TODO: Place your code here
    classroom.students[findStudent(name)].grades.push(...grades);
}

function removeLowestGrade(name){
    /*
    This function will remove the lowest grade for a student in your classroom
    Params:
        name : String - Name of the student you wish to remove the lowest grade for
    Returns:
        None
    */
    
    // TODO: Place your code here
    let outOfOrder= classroom.students[findStudent(name)].grades
        let ordered= outOfOrder.sort((a,b) => a-b);
        classroom.students[findStudent(name)].grades= ordered.slice(1,ordered.length);

    
}

function calculateAverageGrades(){
    /*
    This function will compute the average grades for each student based on their current scores and place them as their final grade respectively
    Params:
        None
    Returns:
        None
    */

    // TODO: Place your code here
    for (let i = 0; i<classroom.students.length; i++)
    { 
        let sum= 0
        for (let j=0; j<classroom.students[i].grades.length; j++)
        {
            sum += classroom.students[i].grades[j];
        }
        classroom.students[i].finalGrade= (sum/classroom.students[i].grades.length);
    }
    //for each student, for each grade, add and divide by grades.length
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

//TEST 2 - Check addStudent function (3 Students)
console.log("\n\naddStudent Functionality Test #2 - 3 students")
addStudent("B", 11)
addStudent("C", 10)
expected = [{name: "A", age: 10, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 3 - Change information for student
console.log("\n\nchangeStudentName Functionality Test #3")
changeStudentName("A", "D")
expected = [{name: "D", age: 10, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 4 - Change information for student
console.log("\n\nchangeStudentAge Functionality Test #4")
changeStudentAge("D", 15)
expected = [{name: "D", age: 15, grades: [], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 5 - Add Grade
console.log("\n\naddGrade Functionality Test #5")
addGrade("D", 100)
expected = [{name: "D", age: 15, grades: [100], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 6 - Add Grade
console.log("\n\naddGrade Functionality Test #6")
addGrade("D", 80)
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 7 - Add Grades
console.log("\n\naddGrades Functionality Test #7")
addGrades("B", [70, 80, 100])
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 8 - Add Grades
console.log("\n\naddGrades Functionality Test #8")
addGrades("C", [60, 70, 70, 90])
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [60, 70, 70, 90], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//TEST 9 - Remove Lowest Grade
console.log("\n\naddGrades Functionality Test #9")
removeLowestGrade("C");
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: null}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: null}, {name: "C", age: 10, grades: [70, 70, 90], finalGrade: null}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);

//Test 10 - Report Average Grades
console.log("\n\naddGrades Functionality Test #10")
calculateAverageGrades();
expected = [{name: "D", age: 15, grades: [100, 80], finalGrade: 90}, {name: "B", age: 11, grades: [70, 80, 100], finalGrade: 250/3}, {name: "C", age: 10, grades: [70, 70, 90], finalGrade: 230/3}]
result = classroomTest(expected);
console.log(assert(result, 10));
console.log(`\nTotal Score: ${score} out of 100`);