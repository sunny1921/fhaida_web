document.addEventListener('DOMContentLoaded', function() {
    // Initial static properties
    let properties = [
        { id: 1, image: 'https://media.istockphoto.com/id/501619270/photo/apartments.jpg?s=612x612&w=0&k=20&c=uWPZSeIpUWTmQRirBv2m8y3hLBjXVU22R2L4tpaeMOs=', location: 'Andheri', status: 'Active', price: 950000, type: 'Flat', bhk: '2BHK', facing: 'East', furnishing: 'Fully Furnished', dateListed: new Date(2024, 0, 10) },
        { id: 2, image: 'https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI=', location: 'Bandra', status: 'In Process', price: 1800000, type: 'Flat', bhk: '3BHK', facing: 'West', furnishing: 'Semi Furnished', dateListed: new Date(2024, 0, 5) },
        { id: 3, image: 'https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=612x612&w=0&k=20&c=_tGiix_HTQkJj2piTsilMuVef9v2nUwEkSC9Alo89BM=', location: 'Juhu', status: 'Sold', price: 2500000, type: 'Individual House', bhk: '3BHK', facing: 'North', furnishing: 'Unfurnished', dateListed: new Date(2024, 0, 20) },
    ];

    // Function to generate additional properties dynamically
    const additionalProperties = generateAdditionalProperties(30); // Generate 30 more properties
    properties = properties.concat(additionalProperties); // Combine initial and generated properties

    function generateAdditionalProperties(number) {
        const additional = [];
        const locations = ["Andheri", "Bandra", "Juhu", "Powai", "Goregaon", "Malad", "Dadar", "Colaba", "Santa Cruz", "Vashi", "Kurla"];
        const statuses = ["Active", "In Process", "Sold"];
        const bhks = ["1BHK", "2BHK", "3BHK"];
        const priceranges = [[500000, 1000000], [1000001, 2000000], [2000001, 3000000], [3000001, 4000000]];
        const facings = ["East", "West", "North", "South"];
        const furnishings = ["Fully Furnished", "Semi Furnished", "Unfurnished"];
        const types = ["Individual House", "Flat"];
        const houseImages = [
            "https://media.istockphoto.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k=",
            "https://media.istockphoto.com/id/453944565/photo/home-exterior.jpg?s=612x612&w=0&k=20&c=6YQuwxfqleCMkKQgv6vi2ljJW4TvdpA4OuwQV3MRInw=",
            "https://media.istockphoto.com/id/1255835529/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=2_gWz960_bNDOmnDHL2kYEcclzwO5xy2XyT9Mput0WE="
        ];
        const flatImages = [
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
            "https://media.istockphoto.com/id/585292028/photo/3d-render-of-3-buildings-exterior.jpg?s=612x612&w=0&k=20&c=wbhrE63_GX1Lv9PIyEWhcunvNE1t5yY3MUT66V1AmZw=",
            "https://media.istockphoto.com/id/1161036960/photo/residential-area-with-apartment-buildings-in-the-city.jpg?s=612x612&w=0&k=20&c=KrKhLVT7eu49F9IhkK67ShHoMzZEuy556fRJ1OG62pU="
        ];

        for (let i = 0; i < number; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const image = type === "Flat" ? flatImages[Math.floor(Math.random() * flatImages.length)] : houseImages[Math.floor(Math.random() * houseImages.length)];
            const location = locations[Math.floor(Math.random() * locations.length)];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const bhk = bhks[Math.floor(Math.random() * bhks.length)];
            const facing = facings[Math.floor(Math.random() * facings.length)];
            const furnishing = furnishings[Math.floor(Math.random() * furnishings.length)];
            const priceRange = priceranges[Math.floor(Math.random() * priceranges.length)];
            const price = Math.floor(Math.random() * (priceRange[1] - priceRange[0] + 1) + priceRange[0]);

            additional.push({
                id: properties.length + i + 1,
                image: image,
                location: location,
                status: status,
                price: price,
                type: type,
                bhk: bhk,
                facing: facing,
                furnishing: furnishing,
                dateListed: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
            });
        }
        return additional;
    }

    // More functions (displayProperties, filterProperties, sortProperties) as previously defined

    function displayProperties(properties) {
        const catalog = document.querySelector('.catalog');
        catalog.innerHTML = '';
        properties.forEach(prop => {
            const card = document.createElement('div');
            card.className = 'catalog-item';
            card.innerHTML = `
                <img src="${prop.image}" alt="Image of ${prop.location}">
                <h3>${prop.location}</h3>
                <p>Status: ${prop.status}</p>
                <p>Price: ₹${prop.price.toLocaleString()}</p>
                <button onclick="window.location.href='property.html';">View More</button>
            `;
            catalog.appendChild(card);
        });
    }

    function filterProperties() {
        const locationFilter = document.getElementById('locationFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const bhkFilter = document.getElementById('bhkFilter').value;
        const priceFilter = document.getElementById('priceFilter').value.split('-');
        const facingFilter = document.getElementById('facingFilter').value;
        const furnishingFilter = document.getElementById('furnishingFilter').value;
        const typeFilter = document.getElementById('typeFilter').value;

        let filteredProperties = properties.filter(prop => {
            const price = prop.price;
            return (!locationFilter || prop.location === locationFilter) &&
                   (!statusFilter || prop.status === statusFilter) &&
                   (!bhkFilter || prop.bhk === bhkFilter) &&
                   (!facingFilter || prop.facing === facingFilter) &&
                   (!furnishingFilter || prop.furnishing === furnishingFilter) &&
                   (!typeFilter || prop.type === typeFilter) &&
                   (!priceFilter[0] || (price >= priceFilter[0] && price <= (priceFilter[1] || Infinity)));
        });

        sortProperties(filteredProperties);
    }

    function sortProperties(propertiesToSort) {
        const sortValue = document.getElementById('sortFilter').value;
        if (sortValue === 'priceAsc') {
            propertiesToSort.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'priceDesc') {
            propertiesToSort.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'dateListed') {
            propertiesToSort.sort((a, b) => b.dateListed - a.dateListed);
        }
        displayProperties(propertiesToSort);
    }


    

    // Hook up event listeners to dropdowns for filtering
    document.querySelectorAll('.filters select').forEach(select => {
        select.addEventListener('change', filterProperties);
    });

    // Initial display of properties
    displayProperties(properties);
});
