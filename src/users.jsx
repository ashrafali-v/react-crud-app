// import React, { Component } from 'react';
// import User from "./user"
// import AddUser from './AddUser'
// import './App.css';

// class Users extends Component {
//   state = {
//     loading: true,
//     users: []
//   }
//   async componentDidMount() {
//     const data = await fetch('http://localhost:3027/api/user');
//     const items = await data.json();
//     console.log(items);
//     this.setState({ users: items, loading: false });
//   }
//   render() {
//     if (this.state.loading) {
//       return <div>Loading...</div>
//     }
//     if (!this.state.users) {
//       return <div>No users found!</div>
//     }
//     return (
//       <div>
//         <AddUser/>
//         {
//           this.state.users.map(item => (
//             <User name={item.name} userId={item._id} key={item._id} />
//           ))
//         }

//       </div>
//     );
//   }
// }
// export default Users;


import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AddUser from './AddUser'

function Users() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchItems = async () => {
    const data = await fetch('http://localhost:3027/api/user');
    const userArray = await data.json();
    setUsers(userArray);
    setLoading(false);
  }
  const addUser = newUser => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };
    fetch('http://localhost:3027/api/user/add', requestOptions)
      .then(response => response.json())
      .then(data => {
        setUsers(prevUSers => {
          return [...prevUSers, data]
        });
      });
    // fetch('http://localhost:3027/api/user/add', requestOptions).then(function(response) {
    //   if (response.status === 404) {
    //     response.json().then(function(object) {
    //       console.log(object.type, object.message)
    //     })
    //   } else if (response.status === 200) {
    //     response.json().then(function(object) {
    //       console.log('success')
    //     })
    //   }
    //   else if(response.status === 400){
    //     console.log(response)
    //   }
    // })
  }
  if (loading) {
    return <div>Loading...</div>
  }
  else if (!users) {
    return <div>No users found!</div>
  }
  return <div>
    <AddUser onAdd={addUser} />
    {users.map(item => (
      <h3 key={item._id}>
        <Link to={`/users/${item._id}`}>{item.name}</Link>
      </h3>
    ))}
  </div>

}

export default Users;
