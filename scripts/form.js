document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    
    const productDropdown = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });

   
    document.getElementById('lastModified').textContent = document.lastModified;
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    let reviewCount = localStorage.getItem('reviewCount') || 0;
    const counterElement = document.getElementById('reviewCounter');
    counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;

   
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
       
        if (!document.getElementById('product').value) {
            alert('Please select a product!');
            return;
        }
        if (!document.querySelector('input[name="rating"]:checked')) {
            alert('Please rate the product!');
            return;
        }
        if (!document.getElementById('installDate').value) {
            alert('Please select installation date!');
            return;
        }

      
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
        counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;

      
        const selectedProductId = document.getElementById('product').value;
        const formData = {
            productId: selectedProductId,
            productName: products.find(p => p.id === selectedProductId).name,
            rating: document.querySelector('input[name="rating"]:checked').value,
            installDate: document.getElementById('installDate').value,
            features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value),
            review: document.getElementById('review').value,
            userName: document.getElementById('userName').value,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('productReview', JSON.stringify(formData));

        alert(`Review posted successfully! Total reviews: ${reviewCount}`);
        this.reset();
    });
});