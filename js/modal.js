function onClickGalleryImage(src) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    console.log("src: ", src);
    const modalImage = document.getElementById("modalImg");
    modalImage.src = src;
}

function onClickExit() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function onClickRight() {
    const gallery = document.getElementsByClassName("galleryImage");
    const modalImage = document.getElementById("modalImg");
    const modalImageSrc = modalImage.getAttribute("src");

    console.log(modalImage);
    console.log(modalImageSrc);
    console.log(gallery);
}
