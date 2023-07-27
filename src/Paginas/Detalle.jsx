import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../Productos/Productos";


export const Detail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        getProduct(+id).then((res) => {
            setProducto(res);

        });
    }, []);

    if (!Object.keys(producto).length) return

    return (
        <div className="detail_container">
            <div className="detail_container_img">
                <img className="detail_img" src={producto.img} />
            </div>
            <div className="description_container">
                <h3>{producto.tipo}</h3>
                <h4>{producto.modelo}</h4>
                <h5>U$S {producto.precio}</h5>
                <p>{producto.detalle}</p>
            </div>
        </div>
    );
};
