import React  from 'react';
import './User.css'
 
function Main({user}){

    return (        
            <li className=" col-md-5 col-sm-12">                  
                  <header>
                         <img src={user.avatar_url} alt="user "/>
                         <div>
                             <strong>{user.name}</strong>
                             <span>{user.knowledge} </span>
                         </div>
                  </header>
                     <div className="bio">
                        <p>
                        {user.bio}
                         </p>
                  <a href={`https://github.com/${user.githubNick}`}> acessar link no github</a> 

                     </div>                 
             </li>                           
    )
}
export default Main