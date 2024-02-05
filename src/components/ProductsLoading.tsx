import { ReactElement } from "react"
import { ProductType } from "../features/products/productsSlice"

interface ProductsLoadingType {
  products:ProductType[],
  load:(item:ProductType)=>ReactElement
}

const ProductsLoading = ({products,load}:ProductsLoadingType) => {
  return<>
  {products.map((product)=>{
    return load(product)
  })}
  </>
}
export default ProductsLoading