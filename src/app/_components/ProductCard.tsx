
type ProductProps = {
    id:number;
    image: string;
    name: string;
    category: string;
    description: string;
    price: number;
}

const ProductCard = (
    {id,image,name,category,description,price}:ProductProps
)=>{
    return (
        <>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden  border-1 border-gray-200">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400 `}>
                    <p className='font-bold text-md text-gray-400'>{name}</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:{category}
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                        {description}
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">${price}</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductCard;