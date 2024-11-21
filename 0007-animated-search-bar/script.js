const searchBarContainerEl = document.querySelector(".active");

const magnifier1 = document.querySelector(".magnifier");

function changeClass() {
    searchBarContainerEl.classList.toggle("active");
};

magnifier1.onclick = changeClass;





