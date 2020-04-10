import React from 'react';
import './App.css';
import img from './imageInSrc.jpg';
import './style.css';


function App() {
  return (
    <div>
        <div style={{border:'solid 1px black',maxWidth:"100vw"}}>
                  <h1 className="titleRed">Mariem Aissa</h1>  
                 <br/>
                  <img src={img} />  
               <br/>
                  <img src="/imageInPublic.jpg" style={{width: '630px'}}/>  
        </div>
                  <video style={{width: 320,height:240}} controls>  
                    <source src="myVideo.mp4" type="video/mp4"/> 
                  </video> 

    </div>
   
     
  );
}

export default App;
