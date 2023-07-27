import { Item } from "../Item/Item"
import "./ItemListContainer.css"

export const ItemListContainer = ({ products }) => {
    return (
        <div className="ItemListContainer">
            {products.map((product) => (
                <Item
                    key= {product.id}
                    id={product.id}
                    img= {product.img}
                    tipo= {product.tipo}
                    modelo= {product.modelo}
                    precio= {product.precio}
                />
            ))}
        </div>
    );
};