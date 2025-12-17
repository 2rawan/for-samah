document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthdayAudio');
    const musicBtn = document.getElementById('musicToggleBtn');
    const images = document.querySelectorAll('.gallery-img');
    let currentImageIndex = 0;
    let isPlaying = false;

    
    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    if (images.length > 1) {
        images[0].classList.add('active'); 
        setInterval(changeImage, 4500);
    }
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = '🎶 اضغطي لبدء الأغنية والاحتفال! 🎶';
            isPlaying = false;
        } else {
            audio.play().then(() => {
                musicBtn.innerHTML = '⏸ أوقفي الموسيقات قليلاً';
                isPlaying = true;
            }).catch(error => {
                console.error("Audio playback failed:", error);
                alert("تعذر تشغيل الأغنية تلقائيًا.");
            });
        }
    });

    
    const header = document.querySelector('.bounce-in');
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 100);
});
