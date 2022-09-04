let header = document.getElementById("nav");
window.addEventListener('scroll',function(){
     if(window.pageYOffset >= 150){
        header.classList.add('sticky');
     }else{
        header.classList.remove('sticky');
     }
});

function openMenu(){
    document.getElementById("menubar").style.left = '0';
}
function closeMenu(){
    document.getElementById("menubar").style.left = '-280px';
}