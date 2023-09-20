// return the first two drivers
// has anonymous function

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
 
// Return the last two drivers  
// has anonymous function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

// creating an array

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// Higher order function 

function createFareMultiplier (ride) {
    // Define the function for multiplying the fare by 4
    // return the function

    return function (fare) {
        return fare * ride;
    }
}

// Define the function and * 2

const fareDoubler = createFareMultiplier(2);

// Define the function and * 3

const fareTripler = createFareMultiplier(3);

// Define the function

function selectDifferentDrivers (drivers, tick) {
    return tick(drivers);
}