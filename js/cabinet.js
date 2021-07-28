const element = document.querySelectorAll('.prof-element');
element.forEach(function(el, key){                
    el.addEventListener('click', function () {
        el.classList.add("prof-active");
            
        element.forEach(function(ell, index){
            if(key !== index) {
                ell.classList.remove('prof-active');
            }
        });
    });
});