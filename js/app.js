const form = document.querySelector('form');
const numberInput = document.querySelector('#data');

// form validation

function validateForm() {
    let inputValue = numberInput.value;
    if (inputValue == '') {
        const errorMsg = document.querySelector('.erorr');
        errorMsg.innerHTML = "<h1> please Go add some numbers first </h1>";
        errorMsg.style.display = "flex";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000)
    } else {
        return parseInt(inputValue);
    }

}

// Convert input value to Hex

function convertToHex() {
    let convertValue = validateForm().toString(16);
    return convertValue
}
// Display HEX in DOM
function desplayHex() {
    const outputHex = document.querySelector('#output-hex');
    outputHex.textContent = convertToHex()
}

// Convert to binary

function convertToBinary() {
    let convertValue = validateForm().toString(2)
    return convertValue
}

// Display to DOM
function desplayBinary() {
    const outputBin = document.querySelector('#output-bin');
    outputBin.textContent = convertToBinary()
}


// Convert to OCT
function convertToOct() {
    let convertValue = validateForm().toString(8)
    return convertValue
}
// display OCT in DOM
function desplayOct() {
    const outputOct = document.querySelector('#output-oct');
    outputOct.textContent = convertToOct()
}

// Lesner to submit

form.addEventListener('submit', (e) => {
    e.preventDefault();
    desplayHex();
    desplayBinary()
    desplayOct();
    numberInput.value = "";
})