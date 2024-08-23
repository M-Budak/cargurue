document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedback-form');
  const successPopup = document.getElementById('success-popup');
  const homeButton = document.getElementById('home-button');
  const reviewButton = document.getElementById('google-review-button');
  const tekrarButton = document.getElementById('tekrar-degerlendir');
  const ratings = {};

  // Handle rating button clicks
  document.querySelectorAll('.rating-btn').forEach(button => {
      button.addEventListener('click', function() {
          const category = this.dataset.category;
          const value = this.dataset.value;

          // Update the selected rating in the object
          ratings[category] = value;

          // Update button styles
          document.querySelectorAll(`[data-category="${category}"]`).forEach(btn => {
              btn.classList.remove('selected');
          });
          this.classList.add('selected');
      });
  });

  // Handle form submission
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const urlParams = new URLSearchParams(window.location.search);
      const model = urlParams.get('page');
      
      formData.append('model', model); // Add model parameter to form data

      for (const category in ratings) {
          formData.append(category, ratings[category]);
      }

      // Show success popup immediately
      successPopup.classList.remove('hidden');

      // Asynchronous data submission
      fetch('https://script.google.com/macros/s/AKfycbzwoHYFIHiBmtZYjGqFKhQ9nc3vZxpwAGOwmoxNUZHIrQTxg9Tc7xNf11bSnW0Mc98A/exec', {
          method: 'POST',
          body: formData,
      })
      .then(response => response.json())
      .then(result => {
          if (result.result !== 'success') {
              alert('Form submission failed: ' + result.error);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Form submission failed');
      });
  });

  // Handle button clicks
  document.getElementById('tekrar-degerlendir').addEventListener('click', function() {
      window.history.back(); // Go back to the previous page
  });

  document.getElementById('home-button').addEventListener('click', function() {
      window.location.href = 'https://m-budak.github.io/cargurue/anasayfa.html'; // Ana sayfa URL'sini burada belirtin
  });

  document.getElementById('google-review-button').addEventListener('click', function() {
      window.location.href = 'YOUR_GOOGLE_REVIEW_URL'; // Google İnceleme URL'sini burada belirtin
  });
});
