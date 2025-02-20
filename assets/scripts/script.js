const menu = document.getElementById("menu");
const cartbtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItenscontainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cart = [];

// função para abrir o modal do carrinho
cartbtn.addEventListener("click", function() {
    cartModal.style.display = "flex";
    updateCartModal();
});

// função para fechar o modal do carrinho
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// fechar o modal com o botão de fechar
closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none";
});

// função para adicionar itens ao carrinho  
menu.addEventListener("click", function(event) {
    let parentButton = event.target.closest(".add-to-cart-btn");

    if(parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        //adicionar o item ao carrinho
        addToCart(name, price);
    }
});

// função para atualizar o carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if(existingItem) {
        existingItem.quantity += 1;
        Toastify({
            text: `Quantidade de ${name} aumentada!`,
            duration: 2000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#16a34a",
            },
        }).showToast();
    } else {
        cart.push({
            name,
            price,
            quantity: 1
        });
        Toastify({
            text: `${name} adicionado ao carrinho!`,
            duration: 2000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#16a34a",
            },
        }).showToast();
    }
    updateCartModal();
}

// função para atualizar o carrinho
function updateCartModal() {
    cartItenscontainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col");

        total += item.price * item.quantity;

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>

                <button class="remove-from-cart-btn" data-name="${item.name}">
                    Remover
                </button>
            </div>
        `;

        cartItenscontainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartCounter.textContent = cart.length;
}

// função para remover itens do carrinho
cartItenscontainer.addEventListener("click", function(event) {
    if(event.target.classList.contains("remove-from-cart-btn")) {
        const name = event.target.getAttribute("data-name");
        removeFromCart(name);
    }
})

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if(index !== -1) {
        const item = cart[index];
        if(item.quantity > 1) {
            item.quantity -= 1;
            updateCartModal();
            return;
        }
        cart.splice(index, 1);
        updateCartModal();
    }
}

addressInput.addEventListener('input',function(event){
    let inputValue = event.target.value;

    if(inputValue !== "") {
        addressInput.classList.remove("border-red-500");
        addressWarn.classList.add("hidden");
    }

})

//finalizar pedido
checkoutBtn.addEventListener('click', function(){
    const isOpen = checkRestaurantOpen();

    if(!isOpen) {
        Toastify({
            text: "Restaurante fechado no momento!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#ef4444",
            },
        }).showToast();

        return;
    }

    if(cart.length === 0) return;

    if(addressInput.value === "") {
        addressWarn.classList.remove("hidden");
        addressInput.classList.add("border-red-500");
        return;
    }

    // Preparar e enviar pedido para WhatsApp
    const cartItems = cart.map((item) => {
        return `\n- ${item.name} (${item.quantity}x) - R$${item.price.toFixed(2)}`
    }).join("");

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const mensagemFormatada = `*Novo Pedido*${cartItems}\n\n*Total: R$${total.toFixed(2)}*\n\n*Endereço de Entrega:*\n${addressInput.value}`;
    
    const message = encodeURIComponent(mensagemFormatada);
    const phone = "5571996538037";

    // Usando formato mais simples do WhatsApp
    window.location.href = `https://wa.me/${phone}?text=${message}`;
    
    // Limpar carrinho após enviar
    cart = [];
    updateCartModal();
    cartModal.style.display = "none";
    addressInput.value = "";
});

//verifica se o card do horario
function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    console.log('Hora atual:', hora);
    return hora >= 8 && hora <= 23;
}

function updateRestaurantStatus() {
    const spanItem = document.getElementById("date-span");
    
    if (!spanItem) {
        console.error("Elemento date-span não encontrado!");
        return;
    }
    
    const isOpen = checkRestaurantOpen();
    console.log('Restaurante está aberto?', isOpen);

    if(isOpen) {
        spanItem.classList.remove("bg-red-600");
        spanItem.classList.add("bg-green-600");
    } else {
        spanItem.classList.remove("bg-green-600");
        spanItem.classList.add("bg-red-600");
        
    }
}

// Atualiza o status inicial
updateRestaurantStatus();




