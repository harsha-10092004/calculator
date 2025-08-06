function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    document.getElementById("display").value += value;
    console.log(value);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
21
document.addEventListener('keydown', function(event) {
    // Check for specific keys
    switch (event.key) {
        case 'Backspace':
            // Remove last character
            let currentValue = document.getElementById('display').value;
            document.getElementById('display').value = currentValue.slice(0, -1);
            break;
        case 'Enter':
            calculateResult();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            appendValue(event.key);
            break;
        default:
            // Optionally handle other keys or do nothing
            break;
    }
});