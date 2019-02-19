var business = "Dept Co.";
var departmentId = ["d001", "d002", "d003", "d004"];
var departments = ["management", "development", "sales", "marketing"];
var employeeId = [
    [100, 102, 103, 104, 500],
    [200, 201, 202, 203, 204, 205],
    [300, 301, 302, 303],
    [400, 401, 402]
];
var salaries = [
    [85000, 85000, 95000, 105000, 150000],
    [65000, 65000, 75000, 75000, 85000, 95000],
    [55000, 65000, 75000, 95000],
    [55000, 65000, 75000]
];
var employeeName = [
    ["Ruth", "Sofía", "Elias", "Mathias", "Arnell"],
    ["Kai", "Isaiah", "Amare", "Nadia", "Nolan", "Jason"],
    ["Alejandro", "Steven", "Brodi", "Mary"],
    ["Jose", "Nia", "Lee"]
];

for (var i = 0; i < departmentId.length; i++) {
    console.log(`Department ${departmentId[i]} - ${departments[i]}:`);

    for (var j = 0; j < employeeName.length; j++) {
        var salary = salaries[i][j];
        var employee = employeeName[i][j];
        var id = employeeId[i][j];
        console.log("Employee:", employee, "Id number is:", employeeId[i][j], "salary is:", salary);
}
}



                // var sum = 0
                // for (var k =0;  k < salaries.length ; k++) {
                //     console.log( sum += salaries[i][j])
                // }



                // function NestedArraySummation(arr) {
                //     var sum = 0;
                //     for (var i = 0; i < arr.length; i++) {
                //         if (typeof arr[i] == "number")
                //             sum = sum + arr[i];
                //         else if (arr[i] instanceof Array)
                //             sum = sum + NestedArraySummation(arr[i]);
                //     }
                //     return sum;
                // }

                // console.log(NestedArraySummation(salaries))
