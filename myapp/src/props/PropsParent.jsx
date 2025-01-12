import PropsChild from "./PorpsChild";
import Users from "./Users";

const PropsParent =()=>{
    let data ="hello" 

    let user ={
        id:1,
        ename:"afreen",
    }
    let dbData =[
        {id:1,ename:"Mohan" , sal:40000, designation:"tester"},
        {id:2,ename:"sohan", sal:60000, designation:"dev"},
        {id:3,ename:"rohan" , sal:50000, designation:"sql"},
        {id:5,ename:"manoj" , sal:70000, designation:"html"},
        {id:6,ename:"raja" , sal:90000, designation:"js"},
    

    ];
    return(
        <div >
            <h1>PropsParent</h1>
            <PropsChild props ={data} user={user}/>
            <Users dbData={dbData}/>
        </div>
    );
};
export default PropsParent;