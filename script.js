// 🌗 MODO ESCURO
const toggleDark = document.getElementById("darkToggle");

if (toggleDark) {
    toggleDark.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark-mode")
        );
    });
}

// manter preferência salva
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// 📊 BARRA DE PROGRESSO DE LEITURA
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;
    const bar = document.getElementById("progress");

    if (bar) {
        bar.style.width = progress + "%";
    }
});

// 🔔 MENSAGEM PARA INICIANTES
setTimeout(() => {
    if (!localStorage.getItem("msgVisto")) {
        const box = document.getElementById("msgBox");
        if (box) box.style.display = "block";
    }
}, 4000);

function fecharMsg() {
    document.getElementById("msgBox").style.display = "none";
    localStorage.setItem("msgVisto", "true");
}
