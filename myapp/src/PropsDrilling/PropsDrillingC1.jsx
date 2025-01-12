import PropsDrillingC2 from "./PropsDrillngC2";
const PropsDrillingC1  =({str,obj}) =>{
    // let{str,obj} =x
    return(
        <div>
            <h1>props drilling C1</h1>
            <PropsDrillingC2 str={str} obj={obj}/>
            </div>
    )
};
export default PropsDrillingC1;