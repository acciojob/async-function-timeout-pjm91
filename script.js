//your JS code here. If required.
// Get references to the DOM elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const button = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function to simulate delay using a Promise and async/await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// The async function that will be triggered on button click
async function handleSubmit() {
    const text = textInput.value;
    const delayTime = parseInt(delayInput.value, 10);

    if (!text || isNaN(delayTime) || delayTime < 0) {
        outputDiv.innerHTML = 'Please enter valid text and a non-negative delay.';
        return;
    }

    // Show loading message before delay
    outputDiv.innerHTML = `Waiting for ${delayTime}ms...`;

    // Wait for the specified delay
    await delay(delayTime);

    // After the delay, display the text
    outputDiv.innerHTML = text;
}

// Add event listener to the submit button
button.addEventListener('click', handleSubmit);
