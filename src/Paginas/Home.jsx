import { useEffect } from "react";
import { useState } from "react"
import { getProducts } from "../Productos/Productos";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";


export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts()
        .then(res => setProducts(res))
    },[]);
    
    return (
        <div>
            <ItemListContainer products={products}/>
        </div>
    );
};