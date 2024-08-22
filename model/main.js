// AOS'yi başlatın
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Show category function
function showCategory(category) {
    // Hide all categories
    document.querySelectorAll('.menu-category').forEach(el => el.style.display = 'none');

    // Remove 'active' class from all buttons
    document.querySelectorAll('.btn-custom').forEach(el => el.classList.remove('active'));

    // Show the selected category
    document.querySelector(`.menu-category[data-category="${category}"]`).style.display = 'block';

    // Add 'active' class to the clicked button
    document.querySelectorAll('.btn-custom').forEach(button => {
        if (button.textContent.includes(category)) {
            button.classList.add('active');
        }
    });
}
