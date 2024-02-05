import { ReactElement, createContext, useState, useEffect } from "react"

export type ProductsType = {
    sku: string,
    name: string,
    price: number
}
const initialState:ProductsType[] = []
// const initialState: ProductsType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 999
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 1999
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 2999
//     }
// ]

export type useProductsContextType = {products:ProductsType[]}

const initialContextState : useProductsContextType = {
    products:[]
}

const ProductsContext = createContext<useProductsContextType>(initialContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({children}:ChildrenType) : ReactElement => {
    const [products,setProducts] = useState<ProductsType[]>(initialState)
    useEffect(()=>{
      const fetchProducts = async ():Promise<ProductsType[]> => {
            const data = await fetch('http://localhost:3500/products').then(res=>data.json()).catch(error=>console.log(error.message)
            ) 
            return data
      }
      fetchProducts().then(products=>setProducts(products))
    },[])
    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext