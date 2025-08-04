/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

//write your code here

for (var year = 1; year <= experience; year++) {
   var startingSalary = startingSalary * 1.05;
}
var startingSalary = parseFloat(startingSalary.toFixed(2));

console.log(startingSalary);
