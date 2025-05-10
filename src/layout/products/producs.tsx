import { ProductCard } from "./ProductCard";

function getImage(fileName: string) {
    const images = import.meta.glob("../../assets/image/*.png", {
        eager: true,
        import: "default",
    }) as Record<string, string>

    return images[`../../assets/image/${fileName}`]
}



export const Products = () => {
    const productList = [
        {
            Image: getImage("hamb-1.png"),
            name: "Hamburguer Smash",
            description: 
                "Pão levinho de fermentação natural da trigou, burguer de 150g, queijo prato e maionese artesanal",
            price: 18.9,
        },
        {
            Image: getImage("hamb-2.png"),
            name: "Hamburguer Duplo",
            description: 
                "Pão de brioche,  burguer de 200g, queijo cheddar, bacon, cebola caramelizada e molho especial",
            price: 32.9,
        },
                {
            Image: getImage("hamb-3.png"),
            name: "Hamburguer Gorgo Smash",
            description: 
                "Pão brioche, burguer de 180g, queijo cheddar e queijo prato, creme de gorgonzola e cebola caramelizada",
            price: 30.9,
        },
                {
            Image: getImage("hamb-4.png"),
            name: "Hamburguer da Casa",
            description: 
                "pão americano, burguer de frango 150g, picles, tomate, alface americana, cebola e molho especial",
            price: 25.90,
        },
                {
            Image: getImage("hamb-5.png"),
            name: "Hamburguer Megaham",
            description: 
                "Pão tradicional, burguer de 300g, queijo prato e queijo cheddar, requeijão, cebola caramelizada e salada opcional",
            price:35.90,
        },
                {
            Image: getImage("hamb-6.png"),
            name: "Hamburguer Barbecue Picante",
            description: 
                "Pão americano, 4 uni burger 150g, tomate, cebola roxa, alface americana, creme de gorgonzol, molho barbecue e molho de pimenta preta",
            price: 38.90,
        },
                {
            Image: getImage("hamb-7.png"),
            name: "Hamburguer X-PLAZA",
            description: 
                "4 pães tradicionais, burguer wagyu 500g, aneis recheados de cebola, queijo muçarela, ovo, geleia de bacon, molho barbecue e maionese artesanal",
            price: 42.90,
        },
                {
            Image: getImage("hamb-8.png"),
            name: "Hamburguer Vegano",
            description: 
                "Pão integral, burguer de (soja, brocolis e grão de bico), cebola branca, alface americana, tomate b-15, repolho roxo, molho de limão e maionese de abacate",
            price: 27.90,
        },
        
    ]

    return (
        <div className="flex flex-col gap-4 items-center">
            {productList.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.Image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div >
    )
}