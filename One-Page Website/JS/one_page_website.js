// Collect the gallery thumbnails and the lightbox controls.
const thumbnails = document.querySelectorAll("#pictures img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const caption = document.getElementById("lightbox-caption");
const closeButton = document.getElementById("lightbox-close");
const previousButton = document.getElementById("lightbox-previous");
const nextButton = document.getElementById("lightbox-next");
let currentIndex = 0;

function showImage(index) {
    // Wrap around when moving past the first or last picture.
    currentIndex = (index + thumbnails.length) % thumbnails.length;
    const thumbnail = thumbnails[currentIndex];
    lightboxImage.src = thumbnail.src;
    lightboxImage.alt = thumbnail.alt;
    caption.textContent = thumbnail.alt + " (" +
        (currentIndex + 1) + " of " + thumbnails.length + ")";
}

function openLightbox(index) {
    showImage(index);
    lightbox.showModal();
    document.body.classList.add("lightbox-open");
    closeButton.focus();
}

function closeLightbox() {
    lightbox.close();
}

thumbnails.forEach(function (thumbnail, index) {
    // Make each thumbnail usable with a mouse or keyboard.
    thumbnail.tabIndex = 0;
    thumbnail.setAttribute("role", "button");
    thumbnail.setAttribute("aria-label", "Open " + thumbnail.alt);
    thumbnail.setAttribute("aria-haspopup", "dialog");

    thumbnail.addEventListener("click", function () {
        openLightbox(index);
    });

    thumbnail.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(index);
        }
    });
});

previousButton.addEventListener("click", function () {
    showImage(currentIndex - 1);
});

nextButton.addEventListener("click", function () {
    showImage(currentIndex + 1);
});

closeButton.addEventListener("click", closeLightbox);

// Clicking the backdrop or empty space around the image closes the lightbox.
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox || event.target === caption) {
        closeLightbox();
    }
});

lightbox.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }
});

lightbox.addEventListener("close", function () {
    document.body.classList.remove("lightbox-open");
});
