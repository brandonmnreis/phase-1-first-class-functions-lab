const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
  }

const fareDoubler = createFareMultiplier(2)
//console.log(fareDoubler(20))

const fareTripler = createFareMultiplier(3)
//console.log(fareTripler(20))

function selectDifferentDrivers(drivers, x) {
    return x(drivers)
}

//console.log(selectDifferentDrivers(['Luis', 'Brandon', 'Bob', 'Jill'], returnLastTwoDrivers))

