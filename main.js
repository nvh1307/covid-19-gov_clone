var navbar = document.getElementById("navbar-fixed");
var menu = document.getElementById("menu");

var menuCheck = menu.offsetTop
window.onscroll = function(){
    if(window.pageYOffset >= menuCheck){
        navbar.classList.add("sticky")
        
        console.log(window.pageYOffset)
        console.log("Day la menu offsettop" + menu.offsetTop)
    }
    else{
        navbar.classList.remove("sticky")
        console.log("Day la menu offsettop " + menu.offsetTop)
    }
  
}




// window.onscroll = function(){
//     if(window.scrollY < menu.offsetTop){
//         navbar.classList.remove("sticky")
//     }
// }