const PropsDrillingC2  =({str,obj}) =>{
console.log(str,obj);

// let{str,obj} =x
    return(
        <div>
            <h1>props drilling C2</h1>
            <h2>{str}</h2>
            <p>{obj.message}</p>

            </div>
    )
};
export default PropsDrillingC2;