//problem 1 
// part 1 : sam mary & bill 
//Sam, Tech, Manager, 40000, true
let sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true
  };
  
  //Mary, Finance, Trainee, 18500, true
  let mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true
  };
  
  //Bill, HR, Executive, 21200, false
  let bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false
  };
  
  // using console.log to display/check 
  console.log('Employee Sam:', sam);
  console.log('Employee Mary:', mary);
  console.log('Employee Bill:', bill);
  
//Create JSON for the company with the following details (companyName, website, employees)
//Tech Stars, www.techstars.site, array of Employees

let techStars = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: [sam, mary, bill]
};


console.log('Company:', techStars);

//problem 2
//A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
// Anna, Tech, Executive, 25600, false
let anna = {
  firstName: 'Anna',
  department: 'Tech',
  designation: 'Executive',
  salary: 25600,
  raiseEligible: false
};
techStars.employees.push(anna);

// Display the new employee JSON for the company
console.log('Updated Company:', techStars);


//problem 3
// calculate the total salary for all company employees.

let totalSalary = techStars.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log('Total Salary for all employees:', totalSalary);

//probelm 4
//If an employee is raise eligible, increase their salary by 10%. 
//Given the JSON of the company and its employees, write a function to update the salary for 
//each employee who is raised eligible, then set their eligibility to false.

function giveRaise(company) {
  company.employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1; // Increase salary by 10%
      employee.raiseEligible = false; // Set eligibility to false
    }
  });
}

// use the function on the company 
giveRaise(techStars);

// Display new stuff from after the raise
console.log('Company after raise:', techStars);

//problem 5

//Some employees have decided to work from home. 
//The following array indicates who is working from home. 
//Use the array to update the company JSON. For each employee, 
//add another property called 'wfh' and set it to true of false

let workingFromHome = ['Anna', 'Sam'];

techStars.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});

// Display new WHF status
console.log('Company with WFH status:', techStars);