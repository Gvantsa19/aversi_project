function ddlistOpenClose(){
    const ddlist = document.querySelector('.dropdownlist')
    if (ddlist.classList.contains('open')){
      ddlist.classList.remove('open')
    } else {
      ddlist.classList.add('open')
    }
  }
  const ddbutton = document.querySelector('.dropdownbutton')
  ddbutton.addEventListener('click', ddlistOpenClose)