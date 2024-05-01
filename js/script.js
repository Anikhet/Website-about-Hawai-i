
document.addEventListener("mousemove",function(details){
    // console.log("hello")
    gsap.to("#crsr",{
        left:details.x,
        top:details.y
    })

})


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        scrollToGeography();
    }, 4000); // 4000 milliseconds delay
});

function scrollToGeography() {
    var geographySection = document.getElementById('geographySection');
    if (geographySection) {
        geographySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var historySection = document.querySelector('.histcon');
    if (historySection) {
        // Adding a slight delay to ensure the transition is visible right after page load
        setTimeout(function() {
            historySection.classList.add('active');
        }, 100); // Delay can be adjusted based on preference
    }
});





let images = ['media/images/image1.jpeg', 'media/images/images2.jpeg'];
let currentImageIndex = 0;

document.getElementById('galleryImage').src = images[currentImageIndex];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    let imgElement = document.getElementById('galleryImage');
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[currentImageIndex];
        imgElement.style.opacity = 1;
    }, 500);
}

