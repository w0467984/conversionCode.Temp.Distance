// function

function convertTemperature(temperature, temperatureUnit) {
    if (temperatureUnit.trim() == "celsius") {
        var celsiusTemp = temperature
        var newTemperature = (celsiusTemp * (9/5)) + 32;
    }
    else {
        var fahrTemp = temperature
        var newTemperature = (fahrTemp - 32) * 5/9;
    };
    console.log(" Converted temperature is " + newTemperature +" degrees"+ temperatureUnit)
    alert(newTemperature + " ° " + temperatureUnit)
    return newTemperature
};
convertTemperature(10, " celsius");
convertTemperature(65, " fahrenheit");

//bonus function
function convertDistance(distance, distanceUnit) {
    if (distanceUnit.trim() == "kilometer") {
        var newDistance = distance * 1.60934;
    }
    else {
        var newDistance = distance *  0.621371;
    }
     console.log("The converted distance is: " + newDistance + " " + distanceUnit+'s') 
     alert("The converted distance is: "+ newDistance + " " + distanceUnit +'s')  
     return newDistance
};
convertDistance(10, "kilometer")
convertDistance(10, "mile")