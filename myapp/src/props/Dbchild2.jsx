const Dbchild2=({users})=>{
    console.log(users);
    
    return(
        <div>
            <h1>db child 2</h1>
            {
                users.map((singleusers)=>{
                    let  {id,name,email,profile:{age,gender,address:{street,zip,city}},hobbies} =singleusers
                    return(
                        <section key={id}>
                            <h2>name:{name}</h2>
                            <h2>email:{email}</h2>
                            <h2>age:{age}</h2>
                            <h2>gender:{gender}</h2>
                            <h2>city:{city}</h2>
                            <h1>Hobbies</h1>
                            <ul>
                                {hobbies.map((ele,i) =>{
                                    return(
                                        <li key={i}>{ele}</li>
                                    )
                                })}
                            </ul>

                        </section>
                    )
                }) 
            }
        </div>
    )
};
export default Dbchild2;