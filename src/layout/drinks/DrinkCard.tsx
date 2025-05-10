interface DrinkCardProps {
    image: string
    name: string
    price: number
}

export const DrinkCard = ({ image, name, price }:DrinkCardProps) => {
    return (
            <div className="flex gap-2 items-center justify-center">

                <img 
                    src={image} 
                    alt={name}
                    className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
                />
    
                <div className="w-full">
                    <p className="font-bold">{name}</p>
                       
                    <div className="flex items-center gap-2 justify-between mt-3">
    
                        <p className="text-lg font-bold">R$ {price.toFixed(2)}</p>
    
                        <button 
                            className="bg-gray-900 px-5 rounded add-to-cart-btn"
                            data-name="Coca-lata"
                            data-price={price.toFixed(2)}>
    
                            <i className="fa fa-cart-plus text-lg text-white"></i>
                        </button>
    
                    </div>
                        
                </div>
    
            </div>
    )

}