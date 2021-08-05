let cart = document.getElementById('caret-down');
let dropList = document.getElementById('drop-list');

cart.addEventListener('click', function (){
    dropList.classList.toggle('active-list');
})