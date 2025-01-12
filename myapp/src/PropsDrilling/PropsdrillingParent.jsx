import PropsDrillingC1 from "./PropsDrillingC1";

const PropsDrillingParant  =() =>{
    let str =" send me to hello "
    let obj= {
        message:"hello"
    }
    
    return(
        <div>
            <h1>props drilling parent</h1>
            <PropsDrillingC1 str={str} obj={obj}/>
            </div>
            
    )
};
export default PropsDrillingParant;