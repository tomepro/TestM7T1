// script.js

// Afegir event a totes les tasques
document.querySelectorAll(".task").forEach(task => {
    task.addEventListener("click", () => {
        moureTasca(task);
    });
});

// Funció per moure tasca
function moureTasca(tasca) {
    const pendents = document.getElementById("pendents");
    const fetes = document.getElementById("fetes");

    // Si la tasca està a pendents, mou-la a fetes
    if (tasca.parentElement.id === "pendents") {
        fetes.appendChild(tasca);
    } else {
        // Si està a fetes, mou-la a pendents
        pendents.appendChild(tasca);
    }
}
