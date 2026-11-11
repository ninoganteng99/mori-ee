
function filterMenu(kategori, tombol) {

    let menu = document.querySelectorAll("#daftar-menu > div");

    menu.forEach(function(item) {

        if (kategori === "semua" || item.dataset.kategori === kategori) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

    let tombolKategori = document.querySelectorAll(".btn-kategori");

    tombolKategori.forEach(function(btn) {
        btn.classList.remove("active");
    });

    tombol.classList.add("active");
}


// Membuat animasi kelopak bunga
const wadahBunga = document.querySelector(".petals");

for (let i = 0; i < 15; i++) {

    let bunga = document.createElement("span");

    bunga.className = "petal";
    bunga.innerHTML = "✿";

    bunga.style.left = Math.random() * 100 + "%";
    bunga.style.animationDelay = Math.random() * 8 + "s";
    bunga.style.fontSize = (12 + Math.random() * 12) + "px";

    wadahBunga.appendChild(bunga);
}

// Filter Kategori Menu
function filterMenu(kategori, tombol) {

    let menu = document.querySelectorAll("#daftar-menu > div");

    menu.forEach(function(item) {

        if (kategori === "semua" || item.dataset.kategori === kategori) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

    // Mengatur tombol aktif
    let tombolKategori = document.querySelectorAll(".btn-kategori");

    tombolKategori.forEach(function(btn) {
        btn.classList.remove("active");
    });

    tombol.classList.add("active");
}