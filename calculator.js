
// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function sub(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function mul(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function div(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero"; // Handle division by zero
    }
    return number1 / number2;
}

// Event handler for addition
document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event handler for subtraction
document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = sub(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event handler for multiplication
document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = mul(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event handler for division
document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = div(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
