function openPopup(title, description, price, image) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup-price").textContent = price;
    document.getElementById("popup-image").style.backgroundImage = "url(" + image + ")";
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}