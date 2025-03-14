import React from "react";
import image from "../assets/Profil.jpg"

const Hero = () =>{
    return (
        <div className="bg-black text-white text-center py-16">
            <img data-aos="fade-right" src={image} alt="" className="mx-auto mb-8 w-38 h-48 rounded-full object-cover transform trasition-transform duration-300 hover:scale-105"/>
            <h1 className="text-4xl font-bold">
                I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">ANDRIAMBOLOLOHASINA Yvan Faideau</span> <br />
                <h2 className="text-2xl font-bold">
                    Full-Stack Developper and Data Scientist
                </h2>
            </h1>
            <p  className="mt-4 text-lg text-gray-300">
                I specialize in building modern and responsive web applications. I can make prediction to your Dataset too.
            </p>
            <div className="mt-8 space-x-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact With Me</button>
                <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
            </div>
        </div>
    )
}

export default Hero;