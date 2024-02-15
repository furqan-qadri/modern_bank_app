import React, { useState } from 'react';
import ProfileCard from './constants/ProfileCard';
import { useForm } from 'react-hook-form';
import Maincta from './Maincta';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';


function MainsForm() {

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.main-card'));
    const dataURL = canvas.toDataURL('image/jpeg');
    downloadjs(dataURL, `${submittedData.email}_card.jpeg`, 'image/jpeg');
  };

  const { register, handleSubmit, setError, formState:{errors, isSubmitting}, } = useForm({
    defaultValues:{
      email:'',
      password:'',
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmittedData(data);
    } catch(error) {
      setError("email", {
        message: "This email is already taken",
      });
    }
  };



  return (


    <div className='flex flex-col gap-10 justify-center items-center'>
      
        <ProfileCard name="Furqan Qadri" age="24" job="Software Engineer" city="Kuala Lumpur"/>
    

      <Maincta  type="submit" text="Download card" onClick={handleCaptureClick} />

      <div className='form-div mt-10 px-4 flex justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='
          form-div
          flex flex-col gap-4'>

          <input className='border rounded-full hover:border-2 border-black p-3' {...register("email",{
            required:"Email is required broooo",
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
      {submittedData && (


          <div className='mt-4'>
            {/* <h2>Submitted Data:</h2>
            <p>Email: {submittedData.email}</p>
            <p>Password: {submittedData.password}</p> */}

            <ProfileCard name={submittedData.password} age="24" job="Software Engineer" city="Kuala Lumpur"/>


          </div>



          )}

    </div>




  )
}

export default MainsForm