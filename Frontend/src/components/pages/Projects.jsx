import React from 'react'
import { Project } from '..';
import img1 from "../../assets/plot11.jpg"
import { Link } from 'react-router-dom';

const projectsData = [
  {
      id: 1,
      title: "Nutan Villa",
      description: "Nutan Villa's area offers outstanding connectivity, making it an ideal location for development. It is conveniently located near major roads and highway, providing easy access to....",
      image:img1, // Replace with the correct path to your image
  },
  {
      id: 2,
      title: "Commercial Complex",
      description: "A commercial hub designed to meet the needs of modern businesses with high-end amenities and strategic location.",
      image: "/assets/images/project2.jpg",
  },
  {
      id: 3,
      title: "Residential Villas",
      description: "Exclusive residential villas offering a private and serene environment, perfect for family living.",
      image: "/assets/images/project3.jpg",
  },
];

function Projects() {
  return (
    <div>
            {/* Header Image Section */}
            <div className="relative md:mt-0 mt-16">
                <img
                    src={Project} // Replace with your header image path
                    alt="Projects Header"
                    className="w-full  object-cover"
                />
            
            </div>

            {/* Ongoing Projects Section */}
            <div className="max-w-7xl mx-auto py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">Ongoing Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                              <Link to={`/${project.id}`} > <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    View Details
                                </button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Projects