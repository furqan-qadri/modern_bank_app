import React, { useState } from "react";
import ProfileCard from "./constants/ProfileCard";
import { useForm } from "react-hook-form";
import Maincta from "./Maincta";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

function MainsForm() {
  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector(".generated-card"));
    const dataURL = canvas.toDataURL("image/jpeg");
    downloadjs(dataURL, `${submittedData.email}_card.jpeg`, "image/jpeg");
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmittedData(data);
      console.log(data);

    } catch (error) {
      setError("email", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8  pb-12">
        <div>
        <span className="text-6xl text-white protest-riot-regular "> Social Card </span>
        </div>

      <ProfileCard
        name="BG Feature"
        age="24"
        job="Software Engineer"
        city="Kuala Lumpur"
      />

      <div className="form-div mt-8 px-4 flex flex-col gap-10 justify-center items-center">
        <div>
        <span className="text-4xl font-bold text-white protest-riot-regular">Make yours now!</span>
        </div>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="
            form-div
            flex flex-col gap-4"
          >
            <input
              className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
              {...register("email", {
                required: "Name is required",
                maxLength: {
                  value:14,
                  message: "Your name is too long!"
                },
              })}
              type="text"
              placeholder="Your name"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}

            <input
              className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
              {...register("age", {
                required: "Age is required",
                pattern: {
                  value: /^\d{0,3}$/,
                  message: "Are you really that old? Check again!",
                },
              })}
              type="text"
              placeholder="Your age"
            />
            {errors.age && (
              <div className="text-red-500">{errors.age.message}</div>
            )}

            <input
              className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
              {...register("job", {
                required: "Job is required",
                pattern: {
                  value: /^[A-Za-z\s]{0,16}$/,
                  message: "job must be letters and less than 16 characters",
                },
              })}
              type="text"
              placeholder="Your job"
            />
            {errors.job && (
              <div className="text-red-500">{errors.job.message}</div>
            )}


            <input
              className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
              {...register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z\s]{0,16}$/,
                  message: "City must be letters and less than 16 characters",
                },
              })}
              type="text"
              placeholder="Your city"
            />
            {errors.city && (
              <div className="text-red-500">{errors.city.message}</div>
            )}

           <div className="text-white flex flex-col gap-2">
            <span>You are a</span>
            <label>
              <input
                className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
                {...register("gender", {
                  required: "Gender is required",
                })}
                type="radio"
                name="gender"
                value="male"
              />
              <span className="mx-2">Male</span>
            </label>

            <label>
              <input
                className="border rounded-full hover:border-2 border-black p-3 shadow-lg"
                {...register("gender", {
                  required: "Gender is required",
                })}
                type="radio"
                name="gender"
                value="female"
              />
              <span className="mx-2">Female</span>
            </label>

            {errors.gender && (
              <div className="text-red-500">{errors.gender.message}</div>
            )}

          </div>
      
       

          <button
            className={`p-4 rounded-full ${
              isSubmitting ? "bg-green-500" : "bg-yellow-500"
            }`}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
        </div>

      {submittedData && (
        <div className="mt-4">
          <ProfileCard
            hello="generated-card"
            image={submittedData.gender === "male" ? "male.jpg" : "woman.png"}
            name={submittedData.email}
            age={submittedData.age}
            job={submittedData.job}
            city={submittedData.city}
          />
        </div>
      )}

{submittedData && (
  <Maincta
    type="submit"
    text="Download card"
    onClick={handleCaptureClick}
  />
)}

      
    </div>
  );
}

export default MainsForm;
