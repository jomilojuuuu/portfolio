import React, { useState } from "react";

function Navigation() {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className="flex gap-10 items-center">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">ABOUT</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">SKILLS</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">PROJECT</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">CONTACTS</p>
            </div>
        </div>
    );
}

export default Navigation;

// <div className="bg-gray-300 w-24 h-[2px]" />
