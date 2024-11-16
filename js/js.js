// Referencias al DOM
const fileInput = document.getElementById('formFile');
const uploadForm = document.getElementById('uploadForm');
const resultDiv = document.getElementById('result');
const submitButton = document.getElementById('submit_button');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!fileInput.files[0]) {
        setResultDiv(resultDiv, "Por favor, selecciona un archivo.", "alert-warning");
        return;
    }

    setResultDiv(resultDiv, "Cargando...", "alert-primary");

    submitButton.disabled = true;

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        setResultDiv(resultDiv, `${data.message}`, "alert-success");
    })
    .catch(error => {
        console.error('Error:', error);
        setResultDiv(resultDiv, "Error al subir el archivo.", "alert-danger");
    })
    .finally(() => {
        submitButton.disabled = false;
    });
});


function setResultDiv(div, text, className) {
    div.className = '';
    div.classList.add('alert');
    div.classList.add(className);
    div.textContent = text
}