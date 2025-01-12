import Dbchild2 from "./Dbchild2";
const Dbchild1=({users})=>{
    console.log(users);
    
    
    return(
        <div>
            <h1>db child 1</h1>
            <Dbchild2 users={users}/>
        </div>
    )
};
export default Dbchild1;