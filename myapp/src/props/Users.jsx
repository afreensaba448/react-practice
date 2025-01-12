const Users =({dbData}) =>{
    console.log(dbData);
    

    
    return(
        <div>
            <h1>users</h1>
            {
                dbData.map(({id,ename,sal,designation})=>{
                   return(
                    <div key={id}>
                        <h1>Username :{ename}</h1>
                        <p>salary:{sal}</p>
                        <p>designation:{designation}</p>
                    </div>
                   );
                    
                    

                })
            }
        </div>
    )
};
export default Users;