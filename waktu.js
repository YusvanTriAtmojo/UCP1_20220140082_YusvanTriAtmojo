function updateGreetings() {
    var today = new Date();
    var currentHour = today.getHours();
    var currentTimeElement = document.getElementById('waktu');
    var greetingsElement = document.getElementById('salam');
    var greetings = '';

    if (currentHour < 10) {
        greetings = 'Hallo Selamat Pagi Kawan! 🌻';
    } else if (currentHour < 19) {
        greetings = 'Hallo Selamat Siang Kawan!🌞';
    } else if (currentHour < 21) {
        greetings = 'Hallo Selamat Sore Kawan!🌅';
    } else {
        greetings = 'Hallo Selamat Malam Kawan !😴🌃';
    }

    greetingsElement.innerText = greetings;
    currentTimeElement.innerText = 'Jam Sekarang: ' + today.toLocaleTimeString();
}

updateGreetings();
setInterval(updateGreetings, 1000);

var slideIndex = 0;

function showSlide() {
    var slides = document.querySelectorAll('.gmbr');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    showSlide();
}

showSlide();