let featuresData = {};

// Sabit özellik isimleri listesi
const featureNames = [
    "Max Hız", 
    "0-100", 
    "Yakıt Türü", 
    "Motor Gücü", 
    "Şanzıman", 
    "Beygir Gücü", 
    "Şehir İçi Tüketim", 
    "Şehir Dışı Tüketim"
];

// Sabit birimler listesi
const featureUnits = [
    "km/h", 
    "sn", 
    "",         // Yakıt Türü için birim yok
    "HP", 
    "",         // Şanzıman için birim yok
    "HP", 
    "lt/100km", 
    "lt/100km"
];

document.addEventListener('DOMContentLoaded', function() {
    fetch('ozellikler.json')
        .then(response => response.json())
        .then(fetchedData => {
            featuresData = fetchedData;
        })
        .catch(error => console.error('Error fetching features data:', error));
});

function showCategory(category) {
    showFeatures(category);
    showReviews(category);
    showScores(category);
}

function showFeatures(category) {
    const featuresContainer = document.getElementById('ozellikler');
    featuresContainer.innerHTML = '';

    if (featuresData[category]) {
        const features = featuresData[category];
        features.forEach((value, index) => {
            const featureElement = createFeatureElement(featureNames[index], value, featureUnits[index]);
            featuresContainer.appendChild(featureElement);
        });
    }
}

function createFeatureElement(name, value, unit) {
    const featureElement = document.createElement('div');
    featureElement.className = 'feature col-3';
    featureElement.innerHTML = `
        <h4>${name}</h4>
        <span class="material-symbols-outlined">settings</span>
        <p>
            <span class="f_number">${value}</span>
            ${unit ? `<span class="f_unit">${unit}</span>` : ''}
        </p>
    `;
    return featureElement;
}
