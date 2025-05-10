import { CartModal } from "./layout/CartModal/CartModal";
import { Drinks } from "./layout/drinks/Drinks";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Products } from "./layout/products/producs";



function App() {
  return (
    <>
      <div className="font-sans">
        <Header/>
        <h2 className="text-center text-2xl md:text-3xl font-bold mt-9 mb-6">
          Conheça nosso menu
        </h2>
        <div id="menu">
          <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
            <Products/>
          </main>
          <div className="mx-auto max-w-7xl px-2 mb-6">   
            <h2 className="font-bold text-3xl">Bebidas </h2>
          </div>
          <Drinks/>
        </div>
        <CartModal/>
        <Footer/>
      </div>
    </>
  );
}

export default App;