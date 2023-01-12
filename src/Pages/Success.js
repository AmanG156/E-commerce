import { useNavigate } from "react-router-dom";
import './Sucess.css';

const Success = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/")
    }
    return (
        <>
            <img
                src="https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-checkmark-icon-green-color-png-image_1952984.jpg"
                alt="succes tick mark"
                class="product_img"
            />
            <h1>Payment done Successfully</h1>
            <button className="success" onClick={handleBack}>Back to Dashboard</button>
        </>
    );
}
export default Success;