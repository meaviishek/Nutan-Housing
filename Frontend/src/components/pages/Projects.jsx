
import { Project, Scrolltop } from '..';
import { Pro1,Pro2 } from '../indeximages';
import img1 from "../../assets/plot11.jpg"
import { Link } from 'react-router-dom';
import { MdLocationCity, MdLocationPin, MdMyLocation } from 'react-icons/md';

const projectsData = [
  {
      id: 1,
      title: "Nutan Villa",
      location:'Rajgir',
      description: "Nutan Villa's area offers outstanding connectivity, making it an ideal location for development. It is conveniently located near major roads and highway, providing easy access to....",
      image:Pro1, // Replace with the correct path to your image
  },
  {
      id: 2,
      title: "Commercial Complex",
      location:'Rajgir',
      description: "A commercial hub designed to meet the needs of modern businesses with high-end amenities and strategic location.",
      image: Pro2,
  },
  {
      id: 3,
      title: "Residential Villas",
      location:'Rajgir',
      description: "Exclusive residential villas offering a private and serene environment, perfect for family living.",
      image: Pro2,
  },
];

function Projects() {
  return (
    <div>
        <Scrolltop/>
            {/* Header Image Section */}
            <div className="relative  mt-20">
                <img
                    src={Project} // Replace with your header image path
                    alt="Projects Header"
                    className="w-full  object-cover"
                />
            
            </div>

            {/* Ongoing Projects Section */}
            <div className="max-w-7xl mx-auto py-6 px-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary mb-8">Ongoing Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectsData.map((project) => (
                         
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden md:hover:scale-105 transition-all duration-300 ">
                             <Link to={`/projects/${project.id}`} > 
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />    
                            <div className="p-6">
                                <p className='flex font-poppins '> <MdLocationPin className='mr-1 text-red-600'/>{project.location}</p>
                                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                                <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                          
                            </div>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Projects