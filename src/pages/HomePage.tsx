import { useEffect, useState,ChangeEvent } from "react";
import { getAllProducts,addProduct,deleteProduct } from "../features/products/productsSlice";
import { reduxDispatch, useReduxSelector } from "../store";
import data from "../data/data";
import { ProductType } from "../features/products/productsSlice";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";

type UseStateType = {
    name: string,
    company: string,
    price: number
}
const initialState:UseStateType = {
    name: '',
    company: '',
    price: 0
}
const HomePage = () => {
    const [filterValues, setFilterValues] = useState<UseStateType>(initialState)
    const { products, productsCount } = useReduxSelector((store) => store.products);

    const dispatch = reduxDispatch();
    useEffect(() => {
        dispatch(getAllProducts(data))
    }, [])
    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilterValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const submitItems = () => {
        dispatch(addProduct(filterValues))
    }
    return (
        <>
        <Search/>
            <div>
                {products.map((product: ProductType,index) => {
                    return <h2 key={index} onClick={()=>dispatch(deleteProduct(product.name))}>{product.name}</h2>
                })}
                <h4>Number of Products : {productsCount}</h4>
            </div>
            <div>
                <form>
                    <input type="text" name="name" id="name" onChange={handleFilterChange} />
                    <input type="text" name="company" id="company" onChange={handleFilterChange} />
                    <input type="number" name="price" id="price" onChange={handleFilterChange} />
                    <button className="btn" type="button" onClick={submitItems}>Submit Stuff</button>
                </form>
            </div>
            <NavLink to='/products'>
               Products
            </NavLink>
        </>
    );
};
export default HomePage;