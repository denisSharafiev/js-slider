
window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

        let slideIndex = 1;

        showSlides(slideIndex);     // Инициализация слайдера

        if(slides.length < 10) {
            total.textContent = `0${slides.length}`;            // Подставляем нули или нет перед номером слайда(вынесено отдельно, чтобы не проверять кол-во слайдов каждый раз при клике по стрелке)
        } else {total.textContent = slides.length;}

        function showSlides (n) {
            if (n > slides.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = slides.length;}

            slides.forEach(item => {item.style.display = 'none'});	// inline-styles
            slides[slideIndex - 1].style.display = 'block';

            if(slides.length < 10) {
                current.textContent = `0${slideIndex}`;            // Подставляем нули или нет перед номером слайда
            } else {current.textContent = slideIndex;}
        }

        function plusSlides(n) {
            showSlides(slideIndex +=n);				
        }

        prev.addEventListener('click', () => {
            plusSlides(-1);
        });
        next.addEventListener('click', () => {
            plusSlides(1);
        });
});