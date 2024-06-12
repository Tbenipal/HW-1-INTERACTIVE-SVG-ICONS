console.log("Js Linked");

const SVG = document.querySelectorAll("#SVG svg");

console.log(SVG);

function logId () {
    console.log(this.id);
}

SVG.forEach((icons) => icons.addEventListener("click", logId));