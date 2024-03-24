var sidenav=document.querySelector(".side-navbar")
var over=document.querySelector(".overlay")


function shownav(){
    sidenav.style.left="0";
    over.style.backgroundColor="black"
    over.style.opacity="0.1"
    over.style.transition="2s"
    
    





}
function closenav(){
    sidenav.style.left = "-60%";
    over.style.backgroundColor = "transparent"; // Corrected setting background color
    over.style.opacity = "1";
    over.style.transition = "2s";
}
var container = document.querySelector(".products");
var elements = container.querySelectorAll(".product-box");

function check() {
    var input = document.querySelector("#search").value.toLowerCase();
    for (var i = 0; i < elements.length; i++) {
        var productName = elements[i].querySelector("p").textContent.toLowerCase();
        if (productName.indexOf(input) < 0) {
            elements[i].style.display = "none"; // Hide the entire product box
        } else {
            elements[i].style.display = "block"; // Show the entire product box
        }
    }
}