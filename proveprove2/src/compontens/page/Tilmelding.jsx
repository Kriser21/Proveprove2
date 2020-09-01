import React from 'react';
import { useForm } from 'react-hook-form';
import Billede from '../img/COLOURBOX21174823.jpg';



const onSubmit = (data) => {
console.log('submit', data);
   
  };


export default function Tilmelding() {
    const { register, handleSubmit, errors} = useForm();
  return (

    <div className="Tilmelding">
      
          <img className="billede" src={Billede} alt=""/>

          <span className="tilmeld">

              <h3>Tilmelding til Rørdal Run</h3>
                <p>Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia laudantium.</p>
          </span>

          <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label> <br />
        <input
          type="text"
          placeholder="email"
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
        <label htmlFor="password">Password:</label> <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({
            required: 'password is required',
            minLength: { value: 5, message: 'password is too shot' },
            maxLength: { value: 7, message: 'password is too long' },
          })}
        />
        <br />
        {errors.password && <span> {errors.password.message} </span>}
        <br />
        <input type="submit" />
      </form>


    </div>
  );
}
