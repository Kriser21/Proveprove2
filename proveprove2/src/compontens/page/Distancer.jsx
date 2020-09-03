import React, { useState, useEffect } from 'react';
import Billede from '../img/COLOURBOX21174823.jpg';


const Fetch= () =>{
    const [apiData, setApiData]= useState (null);
    useEffect(() => {
    if (!apiData){
    
    
    fetch('https://api.mediehuset.net/rordal/pages/2', {
    method:'GET',
    redirect: 'follow',
    })
                
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));        
    }
    });
    
    console.log(apiData && apiData);

  
      return(
        <div>
      <h1>  {apiData && apiData.item.title}</h1>  
      <p>  {apiData && apiData.item.content}</p>

        </div>
      ) 
    
  }
   
export default function Distancer() {
  const [LøbId, setLøbId] = useState('');
const [distancerIdChick, setDistancerIdChick] = useState(false)
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        if (LøbId){
            setDistancerIdChick(true)
        if (!apiData) {
            const fetchHeaders = new Headers();
            fetchHeaders.append('Accept', 'application/json');

            fetch('https://api.mediehuset.net/rordal/run/' + LøbId, {
                method: 'GET',
                headers: fetchHeaders,
                redirect: 'follow',
            })
                .then((res) => res.json())
                .then((data) => {
                    setApiData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
        console.log('data',apiData);
    });
  return (

    <div className="Distancer">
      
          <img className="billede" src={Billede} alt=""/>
            <div className="Løb">
            <Fetch/>
            </div>

             <div className="distance">
            <div className="beskrivel">
                <h3>Distancebeskrivelser</h3>
                <p>Klik på de enkelte distancer for at få en beskrivelse af, hvad den enkelte distance har at tilbyde.</p>
                <br/>

                <li onClick={() =>{
                    setApiData()
                    setLøbId(3)
                }
                }> One Mile</li>

              <li onClick={() =>{
                    setApiData()
                    setLøbId(2)
                }
                }> 5 Km</li>


              <li onClick={() =>{
                    setApiData()
                    setLøbId(1)
                }
                }> 10 Km</li>

            </div>
          


<div className="Distancer-text">

{ distancerIdChick ? (
  <span>
    <h2>  {apiData && apiData.item.title}</h2>  
      <p>  {apiData && apiData.item.description}</p>
  </span>
) : (
  <>
  </>
)

}
</div>
</div>

    </div>
  );
}
