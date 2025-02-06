var checker = 0;

function Color(day) {
    const colors = {
        monday: "#ff4949",
        tuesday: "#ffb253",
        wednesday: "#fdff77",
        thursday: "#51cf66",
        friday: "#6dc7ff",
        saturday: "#3a37ea",
        sunday: "#c037ea"
    };

    const box = document.getElementById("box");
    if (!box) return;
    
    box.style.top = "-800px";
    
    setTimeout(() => {
        box.style.opacity = "1";
        box.style.top = "100px";
        box.style.backgroundColor = colors[day];
    }, 500);
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        Color(button.id);
    });
});

