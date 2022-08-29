
// let button = document.getElementsByClassName("btn");

// console.log(button);


// function myfunction(style) {
//     document.querySelector("btn").style.display = "flex";
// }

// function nice() {

//     if(document.getElementById("photo").style.display == "none"){
//         document.getElementById("photo").style.display = "flex";
//     } else {
//         document.getElementById("photo").style.display = "none";
//     }
// }
// function niceTwo() {

//     if(document.getElementById("photoTwo").style.display == "none"){
//         document.getElementById("photoTwo").style.display = "flex";
//     } else {
//         document.getElementById("photoTwo").style.display = "none";
//     }
// }


function dar() {
    if (document.getElementById("zuragNeg").style.display == "none") {
        document.getElementById("zuragNeg").style.display = "flex"
        document.getElementById("zuragHoyr").style.display = "none"
    }
    else {
        document.getElementById("zuragNeg").style.display = "none"
        document.getElementById("zuragHoyr").style.display = "flex"
    }
}

function darNeg() {
    if (document.getElementById("zuragHoyr").style.display == "none") {
        document.getElementById("zuragHoyr").style.display = "flex"
        document.getElementById("zuragNeg").style.display = "none"
    }
    else {
        document.getElementById("zuragHoyr").style.display = "none"
        document.getElementById("zuragNeg").style.display = "flex"
    }
}