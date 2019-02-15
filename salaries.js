var salaries = [
    { id: 10001, salary: 60117, date: '1986-06-26', date2: '1987-06-26' },
    { id: 10001, salary: 62102, date: '1987-06-26', date2: '1988-06-25' },
    { id: 10001, salary: 66074, date: '1988-06-25', date2: '1989-06-25' },
    { id: 10001, salary: 66596, date: '1989-06-25', date2: '1990-06-25' },
    { id: 10001, salary: 66961, date: '1990-06-25', date2: '1991-06-25' },
    { id: 10001, salary: 71046, date: '1991-06-25', date2: '1992-06-24' },
    { id: 10001, salary: 74333, date: '1992-06-24', date2: '1993-06-24' },
    { id: 10001, salary: 75286, date: '1993-06-24', date2: '1994-06-24' },
    { id: 10001, salary: 75994, date: '1994-06-24', date2: '1995-06-24' },
    { id: 10001, salary: 76884, date: '1995-06-24', date2: '1997-06-23' },
    { id: 10001, salary: 81025, date: '1997-06-23', date2: '1998-06-23' },
    { id: 10001, salary: 81097, date: '1998-06-23', date2: '1999-06-23' },
    { id: 10001, salary: 84917, date: '1999-06-23', date2: '2000-06-22' },
    { id: 10001, salary: 85112, date: '2000-06-22', date2: '2001-06-22' },
    { id: 10001, salary: 85097, date: '2001-06-22', date2: '2002-06-22' },
    { id: 10001, salary: 88958, date: '2002-06-22', date2: '9999-01-01' },
    { id: 10002, salary: 65828, date: '1996-08-03', date2: '1997-08-03' },
    { id: 10002, salary: 65909, date: '1997-08-03', date2: '1998-08-03' },
    { id: 10002, salary: 67534, date: '1998-08-03', date2: '1999-08-03' }
];



module.exports = salaries;



// get sum of msgCount prop across all objects in array
var salaryTotal = salaries.reduce(function(prev, cur) {
  return prev + cur.salary;
}, 0);

console.log('Total Salary:', salaryTotal); // Total Messages: 461
