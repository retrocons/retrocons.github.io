// indexing objects
const overlay = document.getElementById("overlay");
const htmlBtn = document.getElementById("html");
const unicodeBtn = document.getElementById("unicode");
const closeBtn = document.getElementById("close");
const icon = document.getElementById("icon");
const code = document.getElementById("code");
const preview = document.getElementById("preview");
let visible = false;
let htm;
let unic;

// hiding preview by default
// if visible, set display to "absolute".
overlay.style.display = "none";

// events
function close() {
    overlay.style.display = "none";
    visible = false;
}

closeBtn.addEventListener("click", close);

// showing correct preview
function show(html, unicode) {
    visible = true;
    let input = `<i class="${html}"></i>`;
    htm = `navigator.clipboard.writeText("${input}")`;
    unic = unicode;
    code.text = `<i class="${html}"></i>`;
    overlay.style.display = 'block';
    preview.style.display = 'block';
}

htmlBtn.setAttribute("onclick", htm);