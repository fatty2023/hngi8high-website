const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
    
// })

function showMenu(){
    console.log("yes")
    if(menu.style.right ==="-200px") {
        menu.style.right ="0";
    } else{
        menu.style.right ="-200px";
    }
}