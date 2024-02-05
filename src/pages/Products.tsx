import { ReactElement } from "react"
import { ProductType } from "../features/products/productsSlice"
import { reduxDispatch, useReduxSelector } from "../store"
import ProductsLoading from "../components/ProductsLoading"

const Products = () => {
    const {products} = useReduxSelector((store)=>store.products)
    const dispatch = reduxDispatch()
    const Load = (product:ProductType):ReactElement => {
        return <li>{product.name}</li>
    }
  return (
    <ul>
        <ProductsLoading products={products} load={Load}/>
    </ul>
  )
}

export default Products