import React from 'react'
import ProductCard from '@/app/_components/ProductCard'
const products=[
    {
        id:1,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=376&q=80",
        name: "Essence Mascara Lash Princess",
        category: "Beauty",
        description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        price: 25,
    },
    {
        id:2,
        image: "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80",
        name: "Essence Mascara Lash Princess",
        category: "Beauty",
        description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        price: 25,
    },
    {
        id:3,
        image: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        name: "Essence Mascara Lash Princess",
        category: "Beauty",
        description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        price: 25,
    },
    {
        id:4,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        name: "Essence Mascara Lash Princess",
        category: "Beauty",
        description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        price: 25,
    },
]
const Products: React.FC=()=>{
  return (
    <>
       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((product,index)=>(
            <ProductCard  key={index} {...product}/>
        ))}
        </div>
    </>
  )
}
export default Products;
