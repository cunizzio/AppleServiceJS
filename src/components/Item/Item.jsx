import { useNavigate } from "react-router-dom";
import "./Item.css"

export const Item = ({ img, tipo, modelo, precio, id }) => {
    
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/item/${id}`)}>
            <div className="img__container">
                <img src={img} />
            </div>
            <div>
                <h4>
                    {tipo}
                </h4>
                <h4>
                    {modelo}
                </h4>
                <h5>
                    U$S {precio}
                </h5>
            </div>
        </div>
    );
};