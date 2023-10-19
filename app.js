// Buena suerte ! Espero que se te encianda la "bombilla"!
let bulb = document.querySelector("#bulb")

function turnBulb(){
    if(bulb.classList.contains("bulb-off")){
        bulb.classList.replace("bulb-off", "bulb-on");
    } else {
        bulb.classList.replace("bulb-on", "bulb-off");
    }

}
