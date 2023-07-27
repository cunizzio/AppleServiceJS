import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../Productos/Productos";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Categoria = () => {
    const { } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setProducts([]);
        getProducts().then((res) => {
            setProducts(res);
        });
    }, []);

    return (
        <div>
            <h1>categorias</h1>
            <ItemListContainer products={products} />
        </div>
    );
};