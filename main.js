const cartBtn = document.getElementById('cartBtn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const totalValue = document.querySelector('.total-value');


cartBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

  closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

//Añadir al carrito
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');

let totalPrice = 0;

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('click', () => {
    const product = addToCartBtn.parentNode;
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.menu-item-price').textContent;
    const productImage = product.querySelector('.image').src;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productTitle}">
      <span>${productTitle}</span>
      <span>${productPrice}</span>
      <button class="remove-btn">&times;</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
    
    //Borrar del carrito
    const removeBtns = cartItem.querySelectorAll('.remove-btn');

    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.parentNode;
        cartItem.remove();

        totalPrice -= parseFloat(productPrice.substring(1));
        totalValue.textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

    totalPrice += parseFloat(productPrice.substring(1));
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;
  });
});

const image1 = document.getElementById('image1');
const image2 = document.getElementById('imagen2');

const loadImage = (entradas, observe) => {
  entradas.forEach((entrada)=> {
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible')
    }
  });
}

const observe = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.8
});

observe.observe(image1);
observe.observe(imagen2);

const iconos = document.querySelectorAll(".bi");

iconos.forEach(icono => {
  icono.addEventListener("click", function() {
    if (icono.classList.contains("bi-heart")) {
      icono.classList.remove("bi-heart");
      icono.classList.add("bi-heart-fill");
    } else {
      icono.classList.remove("bi-heart-fill");
      icono.classList.add("bi-heart");
    }
  });
});
