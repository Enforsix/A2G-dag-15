const namaElement = document.querySelector("#name")
const ageElement = document.querySelector("#age")
const heightElement = document.querySelector("#age")

const submitButton = document.querySelector("#submit-button")

function submit () {
    const name = nameElement.value
    const age = ageElement.value
    const height = hightElement.value 

    console.log(name)

    if (name === "") {
        console.log ("Ingen Navn")

    } else if ( age === "") {
        console.log ("Inge alder")

    } else if ( height === "") {
        console.log ("Inge høyde")

    } else {
        console.log("Navnet er: " + navn + " Alder er: " + age + "+ Høyden er " + height)
    }
}


function operators () {
    const name = nameElement.value
    const age = ageElement.value
    const height = hightElement.value

    if (name === "Christian" && age > 17){
        console.log("betingelser oppfylt")
    } else {
        console.log("Betingelse ikke oppfylt")
    }

    //if (name === "Christian") {        
    //} else if (age == 25) {
    //} else if (age > 18) {
    //} else if (navn === "Christina" && age > 18){
    //} else if ( Name === "Christina" || age >18 ){
    //}
}


submitButton.addEventListener("click", operators)

