//Code your solution here
// let findMatching = (drivers) => {
//     const result = drivers.find(match => match.name === drivers.name)
//     return result.name ? (result.name) : undefined
//}

// const findMatching = drivers.filter(function (driver) {
//     if (driver.name === driver.name);
//     return driver.name
// })

// function findMatching(driver) {
//     return driver.name
// }

function findMatching(drivers, element) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === element.toLowerCase()
    })
}

function fuzzyMatch(drivers, element) {
    return drivers.filter(function (driver) {
        return driver.substring(0, element.length) === element
    })
}

function matchName(drivers, element) {
    return drivers.filter(function (driver) {
        return driver.name === element
    })
}