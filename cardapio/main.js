// script.js

// Função para abrir a aba lateral
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("active");

  // Ajuste para dispositivos móveis
  if (window.innerWidth <= 320) {
    sidebar.style.width = "30%";
    sidebar.style.left = "0";
  } else {
    sidebar.style.width = "300px";
  }
}

// Função para fechar a aba lateral
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebar").style.width = "0";
}

// Função para calcular o total do carrinho
function calculateCartTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity-input").value);
    const price = parseFloat(item.getAttribute("data-product-price"));
    total += quantity * price;
  });
  document.getElementById("cart-total").innerText = total.toFixed(2);
}

function calculateTotalQuantity() {
  const cartItems = document.getElementById("cart-items");
  let totalQuantity = 0;

  if (cartItems) {
    const quantityInputs = cartItems.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
      totalQuantity += parseInt(input.value);
    });
  }

  return totalQuantity;
}

// Função para adicionar item ao carrinho
function addToCart(event) {
  console.log("event", event);
  // Obter os dados do produto a partir dos atributos data-*
  const button = event.target;
  const productName = button.getAttribute("data-product-name");
  const productPrice = parseFloat(button.getAttribute("data-product-price"));

  // Verificar se o item já está no carrinho
  const cartItems = document.getElementById("cart-items");
  console.log("cartitems", cartItems, productName);
  let cartItem = cartItems?.querySelector(
    `[data-product-name="${productName}"]`
  );

  if (cartItem) {
    // Incrementar a quantidade se o produto já estiver no carrinho
    let quantityInput = cartItem.querySelector(".quantity-input");
    quantityInput.value = parseInt(quantityInput.value) + 1;
  } else {
    // Criar um novo item para o carrinho
    cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.setAttribute("data-product-name", productName);
    cartItem.setAttribute("data-product-price", productPrice);
    cartItem.innerHTML = `
            <p class=\"item\">${productName} - R$<span class="total-price">${productPrice.toFixed(
      2
    )}</span>
            <input type="number" class="quantity-input" value="1" min="1" data-product-price="${productPrice.toFixed(
              2
            )}">
            </p>
        `;

    // Adicionar o item ao carrinho
    const emptyMessage = document.getElementById("emptycart");
    if (emptyMessage) {
      emptyMessage.remove();
    }
    cartItems?.appendChild(cartItem);
  }

  if (cartItems.children.length > 0) {
    document.getElementById("quantity-item").classList.remove("hidden");
  }
  const totalQuantity = calculateTotalQuantity();
  // Atualizar o total do carrinho
  calculateCartTotal();
  document.getElementById("quantity-item").innerHTML = newItems(totalQuantity);
  // Abrir a aba lateral
}

// Função para atualizar o preço total quando a quantidade é alterada
function updateTotalPrice(event) {
  const quantityInput = event.target;
  const quantity = parseInt(quantityInput.value);
  const productPrice = parseFloat(
    quantityInput.getAttribute("data-product-price")
  );
  const totalPriceElement =
    quantityInput.parentElement.querySelector(".total-price");

  const totalPrice = quantity * productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);

  // Atualizar o total do carrinho
  calculateCartTotal();
}
function addEmptyMessage(cartItems) {
  console.log("cartitems:91", cartItems);
  cartItems.innerHTML = '<p id="emptycart">Seu carrinho está vazio.</p>';
}

// Função para remover um item do carrinho
function removeCartItem(event) {
  const cartItem = event.target.parentElement.parentElement;
  cartItem.remove();

  // Verificar se o carrinho está vazio e exibir a mensagem apropriada
  const cartItems = document.getElementById("cart-items");
  if (cartItems.children.length === 0) {
    addEmptyMessage(cartItems);
  }

  // Atualizar o total do carrinho
  calculateCartTotal();
}

// Função para remover todos os itens do carrinho
function clearCart() {
  const cartItems = document.getElementById("cart-items");
  console.log("cartitems:112", cartItems);
  addEmptyMessage(cartItems);
  document.getElementById("quantity-item").classList.add("hidden");
  // Atualizar o total do carrinho
  calculateCartTotal();
}

// Função para finalizar a compra

function showCustomAlert() {
  document.getElementById("custom-alert").classList.remove("hidden");
}

function closeCustomAlert() {
  document.getElementById("custom-alert").classList.add("hidden");

  clearCart();
}

// Adicionar evento de clique a todos os botões "Adicionar ao Carrinho"
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Adicionar evento de clique ao botão de fechar
document.getElementById("close-btn").addEventListener("click", closeSidebar);

// Adicionar evento de mudança aos campos de entrada da quantidade
document
  .getElementById("cart-items")
  ?.addEventListener("input", function (event) {
    if (event.target.classList.contains("quantity-input")) {
      updateTotalPrice(event);
    }
  });

// Adicionar evento de clique aos botões de remover item
document
  .getElementById("cart-items")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item-btn")) {
      removeCartItem(event);
    }
  });

// Adicionar evento de clique ao botão de remover todos os itens
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

function newItems(number) {
  const retorno = number > 0 ? number : "";
  return retorno;
}
