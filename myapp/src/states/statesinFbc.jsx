import { useState } from "react";
const StatesInFbc = () => {
    let [state, setState] = useState("hello");
    function update() {
        setState("byee");
        console.log("clicked");

    };
    console.log(state);


    return (
        <div>
            <h1> i am states {state}
            </h1>
            <button onClick={update}>click</button>
        </div>
    );
};
export default StatesInFbc;