const passwordEl = document.getElementById("password");
const generateButton = document.getElementById("generate");
const lengthSlider = document.getElementById("length");
const lengthLabel = document.getElementById("length-text");
const copyButton = document.getElementById("copy");
const strengthNotches = document.getElementById("strength-notches");

const UpperBox = document.getElementById("upper");
const LowerBox = document.getElementById("lower");
const NumberBox = document.getElementById("number");
const SymbolBox = document.getElementById("symbol");

function Generate() {
    let characters = "";

    if (UpperBox.checked) {
        for (var i = 65; i <= 91; i++) characters += String.fromCharCode(i);
    }
    if (LowerBox.checked) {
        for (var i = 97; i <= 122; i++) characters += String.fromCharCode(i);
    }
    if (NumberBox.checked) {
        for (var i = 48; i <= 57; i++) characters += String.fromCharCode(i);
    }
    if (SymbolBox.checked) {
        for (var i = 33; i <= 47; i++) characters += String.fromCharCode(i);
        for (var i = 58; i <= 64; i++) characters += String.fromCharCode(i);
    }

    if (characters === "") {
        alert("No characters are selected!");
        return;
    }

    let password = "";

    for (let n = 0; n < lengthSlider.value; n++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    const strength = Math.floor(((characters.length * password.length) / (85 * 50)) / 0.25);
    strengthNotches.innerHTML = "<span style='color: var(--primary-color);'>█</span>".repeat(strength) + "<span>█</span>".repeat(4 - strength);

    passwordEl.innerText = password;
}

function UpdateLength() {
    lengthLabel.innerText = lengthSlider.value;
}

function UpdateStrength() {

}

function Copy() {
    navigator.clipboard.writeText(passwordEl.innerText);
}

copyButton.addEventListener("click", Copy);
lengthSlider.addEventListener("input", UpdateLength);
generateButton.addEventListener("click", Generate);

UpdateLength();