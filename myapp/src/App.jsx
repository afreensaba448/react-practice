import Fbc from "./components/fbc";
import StatesInFbc from "./states/statesinFbc";
import Cbc from "./components/Cbc";
import CounterInFbc from "./states/counterinfbc";
import CartBtn from "./cartBtn";
import PropsParant from "./props/PropsParent";
import NewBtn from "./NewBtn.jsx/NewBtn";
import PropsDrillingParant from "./PropsDrilling/PropsdrillingParent";
import Database from "./props/Database";
const App =() =>{
    return(
        <div>

         
           <h1> i am app components</h1>
             {/* <Fbc />
            <Cbc />
             <StatesInFbc />
            <CounterInFbc />
            <CartBtn />  */}
            {/* <PropsParant/>  */}
            {/* <PropsDrillingParant/> */}
            <Database/>
            {/* <NewBtn/> */}

        </div>
    );
};

export default App;