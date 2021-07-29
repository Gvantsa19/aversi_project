const element5 = document.querySelectorAll('.prof-element');
element5.forEach(function(el, key){                
    el.addEventListener('click', function () {
        el.classList.add("prof-active");
            
        element5.forEach(function(ell, index){
            if(key !== index) {
                ell.classList.remove('prof-active');
            }
        });
    });
});