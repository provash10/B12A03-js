/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var twoBrothers = 2;
var result = area / twoBrothers;

console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
    console.log('Laptop');
}

else if (money >= 10000) {
    console.log('Cycle');
}

// else if(money <=10000){
//     console.log('Chocolate');
// }

else {
    console.log('Chocolate');
}




/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    if ((i - 3) % 3 === 0) {
        console.log(i + " - " + "medicine");
    }
    else {
        console.log(i + " - " + "rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";

//write your code here

if (fileName[0] === '#' || fileName.includes('.pdf') || fileName.includes('.docx')) {
    console.log(fileName + ' Store');
}

else {
    console.log(fileName + ' Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

//write your code here

for (var year = 1; year <= experience; year++) {
    var startingSalary = startingSalary * 1.05;
}
var startingSalary =(startingSalary.toFixed(2));

console.log(startingSalary);




