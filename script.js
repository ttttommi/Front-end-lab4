// Функція для перемикання кольору з блакитного на зелений і навпаки
function toggleBackgroundColor(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else if (element.classList.contains(class2)) {
        element.classList.remove(class2);
        element.classList.add(class1);
    } else {
        element.classList.add(class1);
    }
}

// Перемикаємо колір абзацу "Місце народження" за допомогою getElementById
document.getElementById("birthInfo").addEventListener("click", function() {
    toggleBackgroundColor(this, "blue-background", "green-background");
});

// Перемикаємо колір абзацу "Освіта" за допомогою querySelector
document.querySelector("#educationInfo").addEventListener("click", function() {
    toggleBackgroundColor(this, "green-background", "blue-background");
});


// Функції для кнопок керування зображенням
function addImage() {
    const imgContainer = document.getElementById("button-container");
    let img = document.getElementById("image");
    if (!img) {
        img = document.createElement("img");
        img.src = "lviv.jpg";
        img.alt = "Фото Львова";
        img.id = "image";
        img.width = 500;
        imgContainer.insertAdjacentElement("beforebegin", img);
    }
}

function increaseImage() {
    const img = document.getElementById("image");
    if (img) img.width += 50;
}

function decreaseImage() {
    const img = document.getElementById("image");
    if (img && img.width > 50) img.width -= 50;
}

function deleteImage() {
    const img = document.getElementById("image");
    if (img) img.remove();
}
