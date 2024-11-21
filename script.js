// Variables of different data types
const message = "Welcome to the calculator!"; // String
const defaultNumber = 0; // Number
const isReady = true; // Boolean

console.log(message, defaultNumber, isReady);
// Functions for mathematical operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}
// DOM elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

// Event Listeners
addButton.addEventListener("click", () => {
    const sum = add(Number(num1.value), Number(num2.value));
    result.textContent = `Result: ${sum}`;
});

subtractButton.addEventListener("click", () => {
    const difference = subtract(Number(num1.value), Number(num2.value));
    result.textContent = `Result: ${difference}`;
});

multiplyButton.addEventListener("click", () => {
    const product = multiply(Number(num1.value), Number(num2.value));
    result.textContent = `Result: ${product}`;
});

divideButton.addEventListener("click", () => {
    const quotient = divide(Number(num1.value), Number(num2.value));
    result.textContent = `Result: ${quotient}`;
});
// Chart.js Example
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
