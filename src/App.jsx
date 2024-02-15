import React from 'react';
import ProfileCard from './constants/ProfileCard';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, setError, formState:{errors, isSubmitting}, } = useForm({
    defaultValues:{
      email:'test@email.com',
      password:'',
    },
  });
  const onSubmit =  async (data) => {

    try{
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error();
    console.log(data); 
    }
    catch(error){
      setError("email",{
        message:"This email is already taken",
      })
      
    }
   
  };

  return (
    <div className='flex flex-col'>

      <div className='flex flex-col gap-10 justify-center items-center'>
        <ProfileCard name="Furqan Qadri" age="24" job="Software Engineer" city="Kuala Lumpur"/>
      </div> 

      <div className='form-div mt-10 px-4 flex justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='
          form-div
          flex flex-col gap-4'>

          <input className='border rounded-full hover:border-2 border-black p-3' {...register("email",{
            required:"Email is required broooo",
            // pattern: /^\S+@\S+$/i,
            validate: (value) => {
              if (!value.includes('@')) {
                return 'Email must contain @ broooo'
              }
              return true;
            }

          })} type="text" placeholder='email'/>
          {errors.email &&
          (<div className='text-red-500'>{errors.email.message}</div>)}


          <input className='border rounded-full hover:border-2 border-black p-3' {...register("password", {
            required:"password is required broooo",
            minLength: {
              value:8,
              message:'Password must be at least 8 characters',
            },
          })} type="password" placeholder='password'/>
          {errors.password &&
          (<div className='text-red-500'>{errors.password.message}</div>)}

          <button className={`p-4 rounded-full ${isSubmitting ? 'bg-green-500' : 'bg-yellow-500'}`} disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Loading...' : 'Submit'}
          </button>
        </form> 
      </div>

     
    </div>
  );
}

export default App;