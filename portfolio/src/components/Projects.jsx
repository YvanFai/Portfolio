import React from "react";
import Deep from "../assets/deep.webp"
import Machine from "../assets/Machine.jpg"
import rein from "../assets/renforcement.jpg"
import front from "../assets/front.jpeg"
import back from "../assets/back.jpg"
import full from "../assets/full.webp"

const projects = [
    {
        id: 1,
        name: "Deep learning",
        technologies: "Python + Jupyter Notebook",
        image: Deep,
        github: "https://github.com/YvanFai",
    },
    {
        id: 2,
        name: "Machine Learning",
        technologies: "Python + Jupyter Notebook",
        image: Machine,
        github: "https://github.com/YvanFai",
    },
    {
        id: 3,
        name: "Reinforcement Learning",
        technologies: "Python",
        image: rein,
        github: "https://github.com/YvanFai",
    },
    {
        id: 4,
        name: "Frontend development",
        technologies: "React + Vite & Tailwind CSS",
        image: front,
        github: "https://github.com/YvanFai",
    },
    {
        id: 5,
        name: "Backend development",
        technologies: "Node Js",
        image: back,
        github: "https://github.com/YvanFai",
    },
    {
        id: 6,
        name: "Full-Stack development",
        technologies: "React + Vite & Django",
        image: full,
        github: "https://github.com/YvanFai",
    },
];

const Projects = () =>{
    return (
        <div className="bg-black text-white py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24"> 
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project =>(
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover"/>
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.technologies}</p>
                            <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}

export default Projects;