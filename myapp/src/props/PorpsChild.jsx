const PropsChild =(x)=>{
    console.log(x);
    console.log(x.props);
    let {props,user:
        {id,ename}} = x
    return(
        <div>
            <h1>PropsChild {x.props}</h1>
           <h2>{props} {id} {ename}</h2>
        </div>
    );
};
export default PropsChild;