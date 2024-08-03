let featuresData = {};

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
        for (const key in features) {
            const value = features[key];
            const featureElement = createFeatureElement(key, value);
            featuresContainer.appendChild(featureElement);
        }
    }
}

function createFeatureElement(key, value) {
    const feature = document.createElement('div');
    feature.className = 'feature col-3';
    feature.innerHTML = `
        <h4>${key}</h4>
        <span class="material-symbols-outlined">settings</span>
        <p>
            <span class="f_number">${value.value}</span>
            ${value.unit ? `<span class="f_unit">${value.unit}</span>` : ''}
        </p>
    `;
    return feature;
}
