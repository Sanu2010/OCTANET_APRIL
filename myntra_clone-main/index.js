// Assuming you have an array of product objects with properties like name, rating, wishlist status, price, offer, and image URL
// const products = [
//     { name: 'Product 1', rating: 4.5, wishlist: true, price: '$20', offer: '10% Off', imageUrl: './images/New Heights.jpeg' },
//     { name: 'Product 2', rating: 3.8, wishlist: false, price: '$25', offer: '20% Off', imageUrl: './images/SKINCARE.jpeg' },
//     // Add more product objects as needed
//   ];
  

// // Function to display products
// function displayProducts() {
//     const productsContainer = document.querySelector('.products-container');
  
//     products.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.classList.add('product-card');
  
//       productCard.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
//         <div class="product-name">${product.name}</div>
//         <div class="product-rating">Rating: ${product.rating}</div>
//         <div class="product-wishlist">
//           <button class="wishlist-button" data-product-name="${product.name}">
//             ${product.wishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
//           </button>
//         </div>
//         <div class="product-price">${product.price}</div>
//         <div class="product-offer">Offer: ${product.offer}</div>
//       `;
  
//       productsContainer.appendChild(productCard);
//     });
  
//     // Add event listeners to wishlist buttons
//     const wishlistButtons = document.querySelectorAll('.wishlist-button');
//     wishlistButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const productName = button.getAttribute('data-product-name');
//         const product = products.find(p => p.name === productName);
//         if (product) {
//           product.wishlist = !product.wishlist; // Toggle wishlist status
//           button.textContent = product.wishlist ? 'Added to Wishlist' : 'Add to Wishlist';
//           if (product.wishlist) {
//             alert(`${product.name} has been added to your wishlist!`);
//           }
//         }
//       });
//     });
//   }
  
//   // Call the function to display products
//   displayProducts();
  

const products = [
    {
      name: 'Product 1',
      imageUrl: './images/New Heights.jpeg',
      rating: 4.5,
      wishlist: false,
      price: '$20',
      offer: '50% off'
    },
    {
      name: 'Product 2',
      imageUrl: './images/SKINCARE.jpeg',
      rating: 4.0,
      wishlist: false,
      price: '$30',
      offer: '30% off'
    },
    // Add more products as needed
  ];

  // Function to display products
  function displayProducts() {
    const productsContainer = document.querySelector('.products-container');

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <div class="product-name">${product.name}</div>
        <div class="product-rating">Rating: ${product.rating}</div>
        <div class="product-wishlist">
          <button class="wishlist-button" data-product-name="${product.name}">
            <svg class="wishlist-icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path class="heart-icon" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.5 5 18 6.5 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div class="product-price">${product.price}</div>
        <div class="product-offer">Offer: ${product.offer}</div>
      `;

      productsContainer.appendChild(productCard);
    });

    // Add event listeners to wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-button');
    wishlistButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product-name');
        const product = products.find(p => p.name === productName);
        if (product) {
          product.wishlist = !product.wishlist; // Toggle wishlist status
          button.querySelector('.wishlist-icon').classList.toggle('active', product.wishlist);
          if (product.wishlist) {
            alert(`${product.name} has been added to your wishlist!`);
          }
        }
      });
    });
  }

  // Call the function to display products
  displayProducts();