"use strict";
function addEmployee(config) {
    var addEmployee = { fname: 'fname', lname: "lname", id: 12345, ages: 12, salary: 12345, bonus: true };
    if (config.fname) {
        addEmployee.fname = config.fname;
    }
    if (config.lname) {
        addEmployee.lname = config.lname;
    }
    if (config.id) {
        addEmployee.id = config.id;
    }
    if (config.ages) {
        addEmployee.ages = config.ages;
    }
    if (config.salary) {
        addEmployee.salary = config.salary;
    }
    if (config.bonus == true) {
        addEmployee.salary = bonus(addEmployee.salary);
    }
    else {
        addEmployee.bonus = false;
    }
    return addEmployee;
}
function bonus(salary, num) {
    if (num === void 0) { num = 2.5; }
    var bonus = salary * num;
    return bonus;
}
var emp1 = addEmployee({ fname: 'Nattaphat', lname: "Yadfung", id: 99999, ages: 19, salary: 99999, bonus: true });
console.log('Employee', emp1);
