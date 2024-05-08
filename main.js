/* document.getElementById().addEventListener("click", function (e) {
    e.preventDefault();
});
 */

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
