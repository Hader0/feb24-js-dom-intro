// Declare data to use in the logic
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

// Find elements on the page to use in logic
let carsContainerElement = document.getElementById("carsContainer");
// Create elements to add to the page via the logic
let carsContainerList = document.createElement("ul");

// Do logic for each individual item in the array
dataArray.forEach((car) => {
	console.log(car);

    // Create a new HTML element to help us format the data's value
    let newCarEntry = document.createElement("li");

    // Add the data to the new element 
    newCarEntry.innerText += car + "\n";

    // Added button to each entry

    // Click on the button to remove the entry from the list
    let removeButton = document.createElement("button");
    // removeButton.innerText = "Remove " + car;
    removeButton = `Remove ${car}`;
    // Add the removeButton to the car entry
    newCarEntry.appendChild(removeButton);


    // Add the formatted element into the list container
    carsContainerList.appendChild(newCarEntry);
});

// Add the list container onto the actual HTML page
carsContainerElement.appendChild(carsContainerList);