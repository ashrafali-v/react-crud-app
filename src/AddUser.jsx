import React, { useState, useContext } from 'react';
//const [uname, setName] = useState('');
const AddUser = props => {
    // const handleChange = e =>{
    //     setName(e.target.value);
    // }
    // const handleSubmit = event =>{
    //     event.preventDefault();
    //     props.newUser;
    //}
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    });
    function handleChange(event){
        const {name,value} = event.target;
        setUser(prevUser=>{
            return{
                ...prevUser,
                [name]:value
            }
        });
    }
    function submitUser(event){
        props.onAdd(user);
        event.preventDefault();
    }
    return (
        <form onSubmit={submitUser}>
            <input type="text" placeholder="Full Name" name="name" value={user.name} onChange={handleChange}></input>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}></input>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    //     <form onSubmit={() => this.props.addNew}>
    //     <input type="text" name="name"></input>
    //     <input type="text" name="price"></input>
    //     <button type="submit">Submit</button>
    // </form>

        // <div>
        //     <button>add</button>
        // </div>
    );
}

export default AddUser;