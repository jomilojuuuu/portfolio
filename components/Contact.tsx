"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jomilojuforlife2004@gmaii?subject=${formData.subject}&body=Hi My Name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen relative flex flex-col md:text-left md:flex-row -my-[60px] justify-evenly md:mx-auto items-center">

      <h3 className="absolute top-20 uppercase tracking-[20px] text-center text-gray-500 text-3xl">
        contact
      </h3>
      
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl md:text-5xl font-semibold text-center mt-16">
          Want to work with me?
          <span className="text-gray-500"> let’s Connect</span>
        </h4>
        <p className="text-xl text-gray-600 text-center">
          I am open to remote and onsite full-time, part-time, and contract
          frontend web development jobs.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto -mt-10"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput w-[155px] md:w-[310px]"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput w-[154px] md:w-[310px]"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput w-[318px] md:w-[630px]"
          type="text"
        />
        <textarea
          placeholder="Message"
          className="contactInput w-[318px] md:w-[630px]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black w-[320px] md:w-[630px] font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
