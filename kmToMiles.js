function convertKilometersToMiles(kilometers) {
    const conversionFactor = 0.621371;
    const miles = kilometers * conversionFactor;
    return miles;
}

const kilometers = 10;
const miles = convertKilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);