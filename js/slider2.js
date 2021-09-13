// slider2 + hide and show
const element = document.querySelectorAll('.element');
element.forEach(function(el, key){                
    el.addEventListener('click', function () {
        el.classList.add("active");
            
        element.forEach(function(ell, index){
            if(key !== index) {
                ell.classList.remove('active');
            }
        });
    });
});

let slide2 = 0;
const slides2 = document.getElementsByClassName("carousel__item2");
const totalslides2 = slides2.length;

document.getElementById("carousel__btn--next2")
.addEventListener("click", function(){
    moveNextSlide2();
});
document.getElementById("carousel__btn--prev2")
.addEventListener("click", function(){
    movePrevSlide2();
});
function updateSlidePositions(){
    for(let slide of slides2){
        slide.classList.remove("carousel__item--visible2");
        slide.classList.add("carousel__item--hidden2");
    }
    slides2[slide2].classList.add("carousel__item--visible2");
}
function moveNextSlide2(){
    
    if (slide2 === totalslides2 -1){
        slide2 = 0;
    } else {
        slide2++;
    }
    updateSlidePositions();
}
function movePrevSlide2(){
   
    if (slide2 === 0){
    // totalslides2 -1, if you wan't infinite carousel effect to both ways
        slide2 = 1;  
    } else {
        slide2--;
    }
    updateSlidePositions();
}