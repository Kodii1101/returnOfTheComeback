/* document.getElementById().addEventListener("click", function (e) {
    e.preventDefault();
});
 */

var stringNi = "This is a string!";
var numberNi = 10;
var isGymers = true;
var fruits = ["apple", "banana", "orange"];
var car = {
    brand: "toyota",
    model: 2024,
    calculateSpeed: function () {
        console.log("Speed is 150,000 km/s");
    },
};

console.log(fruits[1]);
console.log(car.model);
console.log(car.calculateSpeed());
fruits.reverse();

var caculateSalary = function (salaryAmount, employeeName) {
    console.log("Salary is minimum");
};

caculateSalary(5000, "Georgieee");
caculateSalary(7000, "Jasonz");

const onClickToggle = function () {
    console.log("onClick Toggled!");
    const containerElement = document.getElementById("container");
    const style = containerElement.style;

    if (style.flexDirection === "column-reverse") {
        style.flexDirection = "column";
        console.log("if");
    } else {
        style.flexDirection = "column-reverse";
        console.log("else");
    }

    /* console.log(containerElement.style.flexDirection); */
};

document
    .getElementById("toggle-order")
    .addEventListener("click", onClickToggle);

/* function () {
    console.log("naclick Toggled!");
} */
