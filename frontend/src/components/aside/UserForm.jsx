import React,{useEffect, useState} from 'react'
import './UserForm.css'

function UserForm({onSubmit}) {

  const [githubNick, setGithubNick] = useState('')
  const [knowledge, setKnowledge] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  
  useEffect(()=>{  
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude} = position.coords
      setLatitude(latitude)
      setLongitude(longitude)

    }, (err)=>{
      console.log(err);
      
    },
   {
      timeOut: 3000
    })
  }, [])

  async function handleSubmit(e){
    e.preventDefault()

    await onSubmit({
     githubNick,
      knowledge,
      latitude,
      longitude,
    });
   
    setGithubNick('')
    setKnowledge('')
  
  }
    return (
          <form  className="form" onSubmit={handleSubmit}>

          <strong>Cadastre-se</strong>

          <div className="form-group">

              <label htmlFor="githubNick">Nick no github</label>
              <input className="form-control"type="text" name="githubNick" required
              onChange={e=> setGithubNick(e.target.value)} 
               />               
          </div>

          <div className="form-group">
              <label htmlFor="knowledge">Tecnologias que voce conhece</label>
              <input className="form-control"type="text" name="knowledge" required
             onChange={e=> setKnowledge(e.target.value)} 
             /> 
          </div>
          <div className="location">

          <div className="form-group">
              <label htmlFor="latitude">Latitue</label>
              <input className="form-control"type="number" name="latitude" required
               onChange = { e=> setLatitude(e.target.value)} value={latitude}/>

           </div>

           <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input className="form-control" type="number" 
                name="longitude" required
                onChange={e=> setLongitude(e.target.value)} 
                value={longitude}/> 
           </div>

         </div>

            <button type="submit" className="btn">Enviar</button>

          </form>

      
    );
  }
  
  export default UserForm;
  