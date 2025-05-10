export const Footer = () => {
    return (
        <footer className="w-full bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
            <button className="flex items-center gap-2 text-white font-bold" id="cart-btn">
                (<span id="cart-count">0</span>)
                Veja meu carrinho
                <i className="fa fa-shopping-cart text-lg text-white"></i>
            </button>
        </footer>
    )
}