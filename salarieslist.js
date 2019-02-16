
var fs = require("fs")

// fs.readFile('salaries.js', 'utf8', function(err, salaries) {
//     if (err) throw err;
//     var line = (salaries[0].date).split(/\n/);
//     for (var i=0; i < line.length; i++ ) {
//       console.log("The data on line:", i+1 ,"is:", line[i]);
//     }
// });

//console.log(salary[0].salary);

//   for (var i= 0; i < salary.length; i++) {
//     var sum =0;
//     console.log( "The salary of", salary[i].id, " is", salary[i].salary);

// }

// var salaryTotal = salary.reduce(function(prev, cur) {
//   return prev + cur.salary;
// }, 0);

// console.log('Total Salary:', salaryTotal);




fs.readFile("department.txt", 'utf8', function(err, data) {  
   if (err) throw err;
   var arraydat = data.split('\n')
   
   for (var i = 0; i < arraydat.length; i++) {
   		console.log("The data on line", i+1, "is:", data.split('\n')[i]);
   }
   console.log(arraydat)
   
});
