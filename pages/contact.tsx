import React from "react";

type Props = {};

function Contact({}: Props) {
    return (
        <div className="h-screen relative flex flex-col md:text-left md:flex-row max-w-7xl -my-[100px] justify-evenly mx-auto items-center">
            <div className="flex flex-col space-y-5">
                <h4 className="text-4xl md:text-5xl font-semibold text-center mt-16">
                    Want to work with me?
                    <span className="text-gray-500"> let’s Connect</span>
                </h4>
                <p className="text-xl text-gray-600 text-center">I am open to remote and onsite full-time, part-time, and contract frontend web development jobs.</p>
            </div>
            <form className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input placeholder="Name" className="contactInput w-[155px] md:w-[310px]" type="text" />
                    <input placeholder="Email" className="contactInput w-[154px] md:w-[310px]" type="email" />
                </div>
                <input placeholder="Subject" className="contactInput w-[318px] md:w-[630px]" type="text" />
                <textarea placeholder="Message" className="contactInput w-[318px] md:w-[630px]"></textarea>
                <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black w-[320px] md:w-[630px] font-bold text-lg">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
