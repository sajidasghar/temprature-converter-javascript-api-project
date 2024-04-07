const celsiusEL = document.getElementById("celsius");
const fahrnheitEL = document.getElementById("fahrnheit");
const kelvinEL = document.getElementById("kelvin");





function computeTemp(event){    
    currentValue = +event.target.value
    switch (event.target.name) {
        case "celsius":
            kelvinEL.value = (currentValue + 273.32) .toFixed(2)
            fahrnheitEL.value = (currentValue * 1.8 + 32) .toFixed(2)
            break;
        case "fahrnheit":
            celsiusEL.value = ((currentValue - 32) / 1.8) .toFixed(2)
            kelvinEL.value = ((currentValue - 32) / 1.8 +273.32) .toFixed(2)
            break;
        case "kelvin":
            celsiusEL.value = (currentValue - 273.32) .toFixed(2)
            fahrnheitEL.value = ((currentValue - 273.32) * 1.8 + 32) .toFixed(2)
            break;        
        default:
            break;
    }
}