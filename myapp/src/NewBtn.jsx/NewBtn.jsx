import { useState } from "react";

const NewBtn =()=>{

    let [newbtn,setnewBtnText] = useState("shop now ")
    let updateNewBtn =() => setnewBtnText("done now")
    return(
        <div>
            <h1>i an new btn</h1>
            <button onClick={updateNewBtn}>{newbtn}</button>
            </div>
    )
}
export default NewBtn;