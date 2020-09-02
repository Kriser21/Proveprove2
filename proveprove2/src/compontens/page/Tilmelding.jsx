import React from 'react';
import { useForm} from "react-hook-form";

import Billede from '../img/COLOURBOX21174823.jpg';


const onSubmit = (data) => {
console.log('submit', data);
   
  };


export default function Tilmelding() {
    const { register, handleSubmit, errors } = useForm();
  return (

    <div className="Tilmelding">
      
          <img className="billede" src={Billede} alt=""/>

          <span className="tilmeld">

              <h3>Tilmelding til Rørdal Run</h3>
                <p>Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia laudantium.</p>
          </span>

          <form className="form" onSubmit={handleSubmit(onSubmit)}>

<label htmlFor="firstname">Nave</label> <br/>
<input type="text" name="firstname" ref={register({
  require:' firstname is require',
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: 'no number'
  }
})}
/> <br/> <br/>

<label htmlFor="lastname">Efternavn</label> <br/> 
<input type="text" name=" lastname" ref={register({
  required:'lastname is require',
  pattern:{
    value: /^[A-Za-z]+$/i,
    message: 'no number'
  }
})}/> <br/> <br/>



<label htmlFor="birthdate">Fødselsdagdato</label> <br/>
<select name="birthdate" ref={register}>
<option value="">Dag</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>


  </select> 
  {errors.birthdate && <span> {errors.birthdate.message}</span>} 



<select name="Dato" ref={register}>
<option value="">Månde</option>
        <option value="Januar">Januar</option>
        <option value="Februar">Februar</option>
        <option value="Marst">Marst</option>
        <option value="April">April</option>
        <option value="Maj">Maj</option>
        <option value="Juni">Juni</option>
        <option value="Juli">Juli</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="Oktober">Oktober</option>
        <option value="November">November</option>
        <option value="December">December</option>
    


  </select> 
  {errors.Dato && <span> {errors.Dato.message}</span>} 


<select name="År" ref={register}>
<option value="">År</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">199</option>
        <option value="1998">1998</option>
        <option value="1997">1997</option>
        <option value="1996">1996</option>
        <option value="1995">1995</option>
        <option value="1994">1994</option>
        <option value="1993">1993</option>
        <option value="1992">1992</option>
        <option value="1991">1991</option>
        <option value="1990">1990</option>


  </select> 
  {errors.År && <span> {errors.År.message}</span>}  <br/> <br/>


<label htmlFor="gender">Køn</label> <br/>
<select name="gender" ref={register}>
<option value="">Køn</option>
        <option value="male">Mand</option>
        <option value="female">Kvinde</option>


  </select> <br/> <br/>



        <label htmlFor="email">Email</label> <br />
        <input
          type="text"
          name="email"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address',
            },
          })}
        />
        <br />
        {errors.email && <span> {errors.email.message} </span>}
        <br />
    


        <label htmlFor="Address">Address</label> <br />
        <input
          type="text"
          name="Adress"
          ref={register({
            required: 'Adress is required'
      
          })}
        />
        <br />
        {errors.Addres && <span> {errors.Adress.message} </span>}
        <br />

        <label htmlFor="ZipCode">Posternummer</label> <br />
        <input
          type="Number"
          name="ZipCode"
          ref={register({
            required: 'ZipCode is required',
    
      
          })}
        />
        <br />
        {errors.ZipCode && <span> {errors.ZipCode.message} </span>}
        <br />




        <label htmlFor="City">By</label> <br />
        <input
          type="Text"
          name="City"
          ref={register({
            required: 'City is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'no number'
            }
      
          })}
        />
        <br />
        {errors.City && <span> {errors.City.message} </span>}
        <br />




           
        <label htmlFor="Telephone ">Telfonnummer</label> <br />
        <input
          type="Tel"
          name="Telephone"
          ref={register({
            required: 'Telephone  is required'
      
          })}
        />
        <br />
        {errors.Telephone && <span> {errors.Telephone.message} </span>}
        <br />



<label htmlFor="Valg">Vælge</label> <br/>

        <select name="valgr" ref={register({
          required:'valg'
        })}>

        <option value="">Program</option>
        <option value="OneMile">One mile</option>
        <option value="5">5 Kilometer</option>
        <option value="10">10 Kilometer</option>
      </select> <br/>
      {errors.valg && <span> {errors.valg.message}</span>} <br/>

      
    <textarea rows="4" cols="50" name="comment" form="usrform">
    
      </textarea> <br/>

    <input type="submit" value="TILMELD"/> <br/><br/>


      </form> 
  

    </div>
  );
}
