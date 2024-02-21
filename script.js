if (typeof(Storage) !== "undefined") {
    let eInput = document.querySelector("#Email");
    let pInput = document.querySelector("#Password");
    window.addEventListener("load", function() {
        console.log(localStorage.getItem("Email"))
        eInput.value = localStorage.getItem("Email");
        
        pInput.value = localStorage.getItem("Password");
    })
    eInput.addEventListener("change", function () {
        console.log(eInput.value)
        localStorage.setItem("Email", eInput.value);
    })
    pInput.addEventListener("change", function () {
        localStorage.setItem("Password", pInput.value);
    })
} else {
    console.log("Sorry! No Web Storage support..");
}