document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('madLibForm');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
  
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        })
        .then(response => response.text())
        .then(data => {
            resultDiv.innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
  });
  