import React from "react";
import { FaEnvelope , FaFacebook, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const Contact = () =>{
    return(
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24"> 
                <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let's Talk</h3>
                        <p>I'm open to discussing web development project, data science or partnership opportunities.</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                            <a href="mailto:kylefaideau@gmail.com" className="hover:underline">
                                kylefaideau@gmail
                            </a>        
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                            <span>+216 34 69 587 85</span>        
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                            <span>Lot ID 01 Cité Henri Amponenana Fianarantsoa Madagascar</span>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Contact;