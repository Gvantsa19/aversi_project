const productPreview = document.querySelector('.product_preview');
        const leftSide = document.querySelector('.left-side');
        const images = document.querySelectorAll('img');
        console.log(images)
        const rightSide = document.createElement('div');
        productPreview.appendChild(rightSide);
        rightSide.classList.add('right-side');
        rightSide.style.cssText+= `background-image: url('./images/back.png'); margin-top: 50px; background-size: cover;`;

        images.forEach(image => {
            image.addEventListener('click', function() {
                let src = image.src;
                rightSide.style.cssText+= `background-image: url(${src})`;
                
            })
        });