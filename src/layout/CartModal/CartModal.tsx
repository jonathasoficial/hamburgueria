export const CartModal = () => {
    return (
        <div 
            className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden" 
            id="cart-modal">

            <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
                <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>

                <div id="cart-items" className="flex justify-between mb-2 flex-col"></div>

                <p className="font-bold">Total: <samp id="cart-total">0.00</samp></p>

                <p className="font-bold mt-4">Endereço de entrega:</p>
                <input type="text" placeholder="Digite seu endereço completo...." id="address"
                className="w-full border-2 p-1 rounded my-1"/>

                <p className="text-red-500 hidden" id="address-warn">Digite seu endereço completo!</p>

                <div className="flex items-center justify-between mt-5">
                    <button id="close-modal-btn">Fechar</button>
                    <button id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">Finalizar pedido</button>
                </div>

            </div>
        </div>
    )
}