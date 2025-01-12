import { useState } from "react";

const CartBtn =() =>{
let [btnText, setBtnText] = useState("add to cart")
let updateBtn = () => setBtnText("go to cart")

return(
    <div>
        <button onClick={updateBtn}>{btnText} </button>
    </div>
)
};
export default CartBtn; 