
let fuSlideIndex = 0;
fuShowSlides();

function fuShowSlides() {
    let i;
    let slides = document.getElementsByClassName("fu-slide");
    let dots = document.getElementsByClassName("fu-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    fuSlideIndex++;
    if (fuSlideIndex > slides.length) {fuSlideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fu-active", "");
    }
    slides[fuSlideIndex-1].style.display = "block";  
    dots[fuSlideIndex-1].className += " fu-active";
    setTimeout(fuShowSlides, 5000); // تغيير الصورة كل 5 ثواني
}

function fuPlusSlides(n) {
    fuShowSlidesManual(fuSlideIndex += n);
}

function fuCurrentSlide(n) {
    fuShowSlidesManual(fuSlideIndex = n);
}

function fuShowSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("fu-slide");
    let dots = document.getElementsByClassName("fu-dot");
    if (n > slides.length) {fuSlideIndex = 1}    
    if (n < 1) {fuSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fu-active", "");
    }
    slides[fuSlideIndex-1].style.display = "block";  
    dots[fuSlideIndex-1].className += " fu-active";
}
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    // إخفاء جميع الشرائح
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // إزالة الفعالية من جميع النقاط
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

   

    // تغيير الشرائح كل 3 ثواني
    setTimeout(showSlides, 3000); // 3000 ميلي ثانية = 3 ثواني
}

// بدء عرض الشرائح عند تحميل الصفحة
showSlides();
function toggleButtons(button) {
    // تحديد عنصر الأزرار الإضافية المرتبط بزر "عرض الخيارات"
    const extraButtons = button.nextElementSibling;
 
    // إذا كانت الأزرار الإضافية مخفية، يتم عرضها، وإذا كانت معروضة، يتم إخفاؤها
    if (extraButtons.style.display === "none" || extraButtons.style.display === "") {
        extraButtons.style.display = "block";
    } else {
        extraButtons.style.display = "none";
    }
}