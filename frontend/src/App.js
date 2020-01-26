import React,{useEffect, useState} from 'react';
import './global.css'
import './App.css'
import api from './services/api'
import UserForm from './components/aside/UserForm'
import User from './components/user/User'

 
function App() {
  const [users, setUsers] = useState([])
      
  useEffect(()=>{
      async function  handleUsers(){
          const allUsers =  await api.get('/users')
          setUsers(allUsers.data)
      }
      handleUsers()
  },[])

  async function addUser(data){
      
    const res = await api.post('/users', data)

    setUsers([...users, res.data]);      
      
    }

  return (
    <div className="App container ">
      <aside>
      <UserForm onSubmit={addUser}/>

      </aside>
   <main>    
      <ul>
      <div className="row">
        
      {users.map(user => (
            <User key={user._id} user={user} />
          ))}

       </div> 
      </ul>
      

   </main>
     
     
    </div>
  );
}

export default App;
