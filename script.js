let Xoverworld = 0
let Zoverworld = 0
let Xnether = 0
let Znether = 0

function nether(event) {
    let Xnetherhtml = document.getElementById("X-nether");
    let Znetherhtml = document.getElementById("Z-nether");
    let Xoverworldhtml = document.getElementById("X-over-world");
    let Zoverworldhtml = document.getElementById("Z-over-world");
    Xoverworld = Xnetherhtml.value * 8;
    Zoverworld = Znetherhtml.value * 8;
    Xoverworldhtml.value = Xoverworld;
    Zoverworldhtml.value = Zoverworld;
    console.log(Xoverworld);
    console.log(Zoverworld);
    console.log('Tecla pressionada:', event.key);
}

function overworld() {
    let Xnetherhtml = document.getElementById("X-nether");
    let Znetherhtml = document.getElementById("Z-nether");
    let Xoverworldhtml = document.getElementById("X-over-world");
    let Zoverworldhtml = document.getElementById("Z-over-world");
    Xnether = Xoverworldhtml.value / 8;
    Znether = Zoverworldhtml.value / 8;
    Xnetherhtml.value = Xnether;
    Znetherhtml.value = Znether;
    console.log(Xnether);
    console.log(Znether);
    console.log('Tecla pressionada:', event.key);
}
