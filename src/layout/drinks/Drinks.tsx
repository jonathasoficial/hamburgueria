import { DrinkCard } from "./DrinkCard";

function getImage(fileName: string) {
    const images = import.meta.glob("../../assets/image/*.png", {
        eager: true,
        import: "default",
    }) as Record<string, string>

    return images[`../../assets/image/${fileName}`]
}

export const Drinks = () => {
    const drinkList = [
        {
            Image: getImage("refri-1.png"),
            name: "Coca-lata",
            price: 5.50,
        },
        {
            Image: getImage("refri-2.png"),
            name: "Guaraná-lata",
            price: 4.50,
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16 mt-10">
            {drinkList.map((drink, index) => (
                <DrinkCard 
                    key={index}
                    image={drink.Image}
                    name={drink.name}
                    price={drink.price}
                />
            ))}
        </div>
    )
}