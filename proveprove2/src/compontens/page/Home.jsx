import React, { useState, useEffect } from 'react';
import Billede from '../img/COLOURBOX21174823.jpg';

const Fetch = () =>{
    const [apiData, setApiData]= useState (null);
    useEffect(() => {
    if (!apiData){
    
    
    fetch('https://api.mediehuset.net/rordal/run', {
    method:'GET',
    redirect: 'follow',
    })
                
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));        
    }
    });
    
    console.log(apiData && apiData);
    
    let Run =
    apiData&&
        apiData.items.slice(0, 3).map((run) =>{
            let SliceDecription = run.description.substr(0,145)
        
            return(
              <>
                <div className="Run">
                <p>{run.title}</p>
                <p>{SliceDecription}</p>
                <button>TILMELD</button>
                </div>
              </>
               
             );
        });
    return ( 
    <div className="Run">
        {Run} </div>
    );
    };
export default function Home() {
  return (

    <div className="Home">
      
          <img className="billede" src={Billede} alt=""/>

    <span className="Løb">
      <p>
       <br/> <h2>Rørdal Run 2020</h2> <br/> 
        Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
        elit,sed do eiusmod tempor incididunt ut ero <br/>
        labore et dolore magna aliqua. <br/>
        Ut enim ad minim veniam, quis nostrud <br/> 
        exercitation ullamco poriti laboris nisi  <br/>
        ut aliquip ex ea commodo consequat. <br/> 
        Duis aute irure dolor in reprehenderit in uienply. <br/>
        Lorem ipsum dolor sit amet, consectetur <br/>
        adipisicing elit, <br/>
        sed do eiusmod tempor incididunt ut ero <br/> 
        labore et dolore magna aliqua. <br/> 
        Ut enim ad minim veniam, quis nostrud <br/> 
        exercitation ullamco poriti laboris <br/>
        nisi ut aliquip ex ea commodo consequat. <br/> 
        Duis aute irure dolor in reprehenderit in uienply. <br/>
        Ut enim ad minim veniam, quis nostrud exercitation <br/>
        ullamco poriti laboris <br/>
        nisi ut aliquip ex ea commodo consequat. 

         <button className="knap"> MERE INFO</button>
         </p>
         <p>
    <h5>Ruter</h5> <br/>
    Culpa qui officia deserunt mollit anim id est laborum. <br/>
    Sed ut perspiciatis unde omnis iste natus error sit voluptartem <br/>
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br/> 
    quae ab illo inventore veritatis et quasi ropeior architecto beatae <br/> 
    vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas <br/> 
    sit aspernatur aut odit aut fugit, sed quia laudantium. <br/> <br/>
    <div className="fetch">
        <Fetch/>
        </div>
        </p>
        </span> 
    </div>
  );
}
