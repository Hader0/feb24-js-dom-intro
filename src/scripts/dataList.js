let dataArray = [
    "Warthog",
    "Interceptor",
    "Herbie",
    "Lightning McQueen",
    "Batmobile",
    "Bat Tumbler",
    "Cybertruck",
    "Delorean",
    "Elanore",
    "Magic School Bus",
    "Toyota Corolla"
];

let carsContainerElement = document.getElementById("carsContainer");
let carsContainerList = document.createElement("ul");

dataArray.forEach((car) => {
	console.log(car);

    let newCarEntry = document.createElement("li");

    newCarEntry.innerText += car + "\n";

    carsContainerList.appendChild(newCarEntry);
});

carsContainerElement.appendChild(carsContainerList);