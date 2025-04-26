// Function to change the text content of a paragraph
function changeText() {
    const textElement = document.getElementById('text');
    textElement.textContent = 'The text has been changed! 🎉';
}

// Function to add a new element
function addElement() {
    const dynamicElementsDiv = document.getElementById('dynamicElements');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamic paragraph.';
    dynamicElementsDiv.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const dynamicElementsDiv = document.getElementById('dynamicElements');
    const lastElement = dynamicElementsDiv.lastElementChild;
    if (lastElement) {
        dynamicElementsDiv.removeChild(lastElement);
    }
}

// Event listeners for buttons
document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('addElementButton').addEventListener('click', addElement);
document.getElementById('removeElementButton').addEventListener('click', removeElement);
