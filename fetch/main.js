document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    // Sayfa yüklendiğinde ilk butonu tıklayın
    const firstButton = document.querySelector('.btn-motor');
    if (firstButton) {
        firstButton.click(); // İlk butonu tıkla
    }
});

// Show category function
function showCategory(category) {
    // Tüm kategorileri gizle
    document.querySelectorAll('.menu-category').forEach(el => el.style.display = 'none');

    // 'active' sınıfını tüm butonlardan kaldır
    document.querySelectorAll('.btn-motor').forEach(btn => btn.classList.remove('active'));

    // Seçili motor butonuna 'active' sınıfını ekleyin
    const selectedButton = document.querySelector(`.btn-motor[data-motor="${category}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        // Seçilen kategoriyi göster
        const categoryElement = document.querySelector(`.menu-category[data-category="${category}"]`);
        if (categoryElement) {
            categoryElement.style.display = 'block';
        }
    }
}
