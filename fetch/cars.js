document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');

    if (!brand) {
        console.error("Brand not specified");
        return;
    }

    fetch('../data/cars.json')
        .then(response => response.json())
        .then(data => {
            if (!data[brand]) {
                console.error("Brand not found in data");
                return;
            }

            const brandData = data[brand];
            loadCars(brandData);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function loadCars(brandData) {
    const categories = ["sedan", "suv", "elektrikli"];
    categories.forEach(category => {
        const categoryDiv = document.getElementById(category);
        if (brandData[category]) {
            brandData[category].forEach(car => {
                const carCard = createCarCard(car);
                categoryDiv.appendChild(carCard);
            });
        }
    });
}

function createCarCard(car) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-6 col-12";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card car-card";

    const img = document.createElement("img");
    img.className = "card-img-top-brand";
    img.src = car.image;
    img.alt = `Araç Resmi ${car.name}`;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const a = document.createElement("a");
    a.href = car.link;

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = car.name;

    a.appendChild(h5);
    cardBody.appendChild(a);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
}
