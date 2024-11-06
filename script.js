let currentIndex = 0; // เริ่มต้นที่ภาพแรก
const mediaItems = document.querySelectorAll('.carousel-images img, .carousel-images video'); // Select both images and videos
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    const totalMediaItems = mediaItems.length;
    if (index >= totalMediaItems) {
        currentIndex = totalMediaItems - 1; // Use totalMediaItems - 1 to ensure the last index matches the number of media items
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    
    // Call updateIndicators to update active indicator
    updateIndicators();
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function toggleFolder(element, ref) {
    element.classList.toggle('active');
    setTimeout(function() {
        window.location.href = ref;
    }, 700);
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Initialize carousel with the first media item and indicator
showSlide(currentIndex);
