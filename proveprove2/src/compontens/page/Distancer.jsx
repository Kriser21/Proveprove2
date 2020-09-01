import React, { useState, useEffect } from 'react';
import Billede from '../img/COLOURBOX21174823.jpg';


const Fetch= () =>{
    const [apiData, setApiData]= useState (null);
    useEffect(() => {
    if (!apiData){
    
    
    fetch('https://api.mediehuset.net/rordal/pages', {
    method:'GET',
    redirect: 'follow',
    })
                
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));        
    }
    });
    
    console.log(apiData && apiData);
    
    let kilometer=
    apiData&&
        apiData.items.slice(1, 2).map((kilometer) =>{
        
            return(
              <>
                <div className="kilometer">
                <p>{kilometer.content}</p>
                </div>
              </>
               
             );
        });
    return ( 
    <div className="kilometer">
        {kilometer} </div>
    );
    };

    const Api = () =>{
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
        
        let Km =
        apiData&&
            apiData.items.slice(0, 3).map((km) =>{
            
                return(
                  <>
                    <div className="km">
                    <p>{km.title}</p> 
                    </div>
                  </>
                   
                 );
            });
        return ( 
        <div className="km">
            {Km} </div>
        );
        };
export default function Distancer() {
  return (

    <div className="Distancer">
      
          <img className="billede" src={Billede} alt=""/>

          <span className="distance">
            <h3>Distancer</h3>

            <div className="Løb">
            <Fetch/>
            </div>

            <div className="beskrivel">
                <h3>Distancebeskrivelser</h3>
                <p>Klik på de enkelte distancer for at få en beskrivelse af, hvad den enkelte distance har at tilbyde.</p>
                <Api/>
            </div>
          </span>

    </div>
  );
}
