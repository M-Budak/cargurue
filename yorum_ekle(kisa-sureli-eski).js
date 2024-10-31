document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedback-form');
  const successPopup = document.getElementById('success-popup');
  const closeButton = document.getElementById('close-popup');

  // Get model parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const model = urlParams.get('page');
  const modelTitle = decodeURIComponent(model); // Decode URL-encoded string
  
  // Set form title based on the model
  document.title = `Geri Bildirim Formu - ${modelTitle}`;
  document.getElementById('page-title').textContent = `Hakkında Düşüncelerini Paylaş - ${modelTitle}`;

  // Create a hidden input field for model
  const modelInput = document.createElement('input');
  modelInput.type = 'hidden';
  modelInput.name = 'model';
  modelInput.value = modelTitle;
  form.appendChild(modelInput);

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbwCW_o7m5yBsSMgFFUd5F6c4BklTX40LOzy6981HOIcqpBhhurqlc3DjBgJPv_ZFBD7/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        form.reset(); // Reset form fields
        successPopup.classList.remove('hidden'); // Show the success popup
      } else {
        console.error('Form submission failed:', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  closeButton.addEventListener('click', function() {
    successPopup.classList.add('hidden'); // Hide the pop-up
  });
});
