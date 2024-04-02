const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('add-button');
    const sortButton = document.getElementById('sort-button');
    const output = document.getElementById('output');

    let numbers = [];

    addButton.addEventListener('click', () => {
      const num = parseFloat(inputBox.value);
      if (isNaN(num)) {
        alert('Please enter a valid number');
        return;
      }
      numbers.push(num);
      inputBox.value = '';
      updateOutput();
    });

    sortButton.addEventListener('click', () => {
      numbers.sort((a, b) => a - b);
      updateOutput();
    });

    function updateOutput() {
      output.textContent = numbers.join(', ');
    }