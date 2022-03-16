// import React from 'react';


 // const FormClass=()=>{
 
 // return(
            //     <>

            //         <div id="dat" className="bg-dark text-white"></div>
            //      <div id="dat" className="bg-primary text-dark"></div>
            //      <input type="text" name="" id="beg" className="bg-dark text-white"  readOnly=""/><br/>
            //         <div className="container">
            //             <div className="row">
            //                 <div className="col-4 p-5 text-center mx-auto bg-light">
            //             <form>
            //                  <input type="text" name="item" className="form-control" placeholder="Item" id="item" onChange={this.myChangeHandler}/>
            //                 <input type="text" name="price" className="form-control" placeholder="Quantity" id="quanlity" onChange={myChangeHandler}/>
            //                 {/* <input type="number" name="" className="form-control" placeholder="Price" id="price"/> */}
            //                  <br/>
            //                  <input type="submit"/> 
            //                 {/* <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button> */}
            //             </form>
            //                 </div>
            //             </div>
            //         </div> <br/> <br/>


            //         <div className="container text-center mx-auto bg-light">
            //         <table className="table" id="show">
            //             <thead>
            //             <tr>
            //                 <th>Item</th>
            //                 <th>Quantity</th>
            //                 <th>Price</th>
            //                 {/* <input type="button" className="btn btn-danger text-white" placeholder="Delete"/>
            //                 <input type="" className="btn btn-primary text-white" placeholder="Add"/> */}
            //                 {/* <button className="btn btn-primary">Add</button>
            //                 <button className="btn btn-danger">Delete</button> */}
            //             </tr>
            //             </thead>
            //         </table>
            //         </div>

            //      </>   

            // )

//     let [name, setName] = useState("");
//     let [age, setAge] = useState("");

//     let inputContainer = useRef(null);

//     let [person, setPerson] = useState({name: "", age: ""});

//     let [users, setUsers] = useState([]);
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         let newUser = {name: person.name, age: person.age}
//         setName('');
//         setAge('');
//         setUsers([...users, newUser]);

//         // setUsers((oldUsers)=>{
//         //     return[...oldUsers, newUser]
//         // })
//         // console.log(users); // this displays aech user and their age in individual objects
//     }

//     const handleChange = (e)=>{
//         let name = e.target.name;
//         let value = e.target.value;
//         // console.log(name, value)
//         setPerson({...person, [name]: value});
//     }

//     return(
//         <>
//             <p className="display-4 text-center">FORM CLASS</p>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-4 p-5 text-center mx-auto bg-light">
//                         <form onSubmit={handleSubmit}>
//                             <input type="text" name="name" className="form-control" placeholder="Name" value={person.name} onChange={handleChange}/>
//                             <input type="number" name="age" className="form-control" placeholder="age" value={person.age} onChange={handleChange}/>
//                             <br/>
//                             <button type="submit" className="btn btn-primary">Save User</button>
//                         </form>
//                             <br/><br/>
//                         <div className="col-6">
//                             <div className="text-center">
//                             {users.map((user, index)=>{
//                                 return <p key={index} className="p-1 bg-light font-weight-bold">{user.name}-{user.age}<Link to={`/user/${user.name}`} className="btn btn-info btn-sm ml-2">View</Link></p>
//                             })}
//                             </div>    
//                         </div>
//                         <br/>
//                         <div className="row"> 
//                             <input className="form-control" ref={inputContainer}/>
//                             <button></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
    // )
// }