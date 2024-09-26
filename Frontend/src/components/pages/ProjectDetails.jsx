import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { Clubimg,Schoolimg,Proj1img } from '../indeximages'



const projectdetails=[
  {
    id: 1,
    title: 'Nutan Villa',
    description: `    <h1 class="font-bold text-2xl mb-2 font-poppins">About Rajgir</h1>
      <div class="md:flex">
        <div>
          <p class="my-3 text-justify pr-4 flex">
            Rajgir, located in Bihar's Nalanda district, is a historic and religious site with deep cultural significance in ancient India. It was a major center during the Maurya and Gupta empires and holds religious importance for Buddhism, Jainism, and Hinduism.<br>
            <h1 class="font-semibold text-lg mt-4 mb-2 font-poppins">Religious Significance:</h1>
            Rajgir is especially important in Buddhism. The Griddhakuta Hill (Vulture Peak), where Buddha is said to have delivered many key sermons, is a major pilgrimage site. The Saptaparni Cave, the venue for the first Buddhist council, is another significant location for Buddhist followers. In addition to its Buddhist heritage, Rajgir also holds significance for Jainism.<br>
            <span id="moreText" class="hidden">
              <h1 class="font-semibold text-lg mt-4 mb-2 font-poppins">Natural Beauty:</h1>
              Rajgir is renowned for its natural beauty. The hot springs, such as the Brahmakund, are famous for their therapeutic properties and attract both pilgrims and tourists. These thermal springs are considered sacred and are used for religious rituals and bathing.
              <h1 class="font-semibold text-lg mt-4 mb-2 font-poppins">Historical Sites:</h1>
              Nearby Rajgir is the ancient university of Nalanda, a major center of learning in ancient India. The ruins of Nalanda provide insights into Buddhist education and ancient culture.
              <h1 class="font-semibold text-lg mt-4 mb-2 font-poppins">Modern Developments:</h1>
              Cultural and Religious Projects: Recent years have seen increased investment in cultural and religious projects, including the construction of new temples, the enhancement of existing religious sites, and the promotion of festivals and events to attract tourists.<br>
              Sustainable Tourism: There is a growing focus on sustainable tourism to balance the preservation of Rajgir's cultural heritage with modern development.

              <h1 class="font-semibold text-lg mt-4 mb-2 font-poppins">Economic Growth:</h1>
Rajgir is being developed as a key tourist destination with plans for further infrastructure improvements, including better transport connectivity and hospitality services. Heritage Conservation: Ongoing efforts are focused on conserving and restoring historical sites and promoting archaeological research to uncover and preserve Rajgir’s ancient heritage.
<br><br>
And many more Government project coming to Rajgir....
            </span>
          </p>
        </div>
      </div>`,
    image: Proj1img,
    details: 'Luxury Apartments is a premium project with modern amenities...',
    location: 'Near KK University Phase II Lodipur, Rajgir,',
    neighbours:'',

    price: '₹1.5 Cr',
    status: 'Ongoing',
    amenities: ['Swimming Pool', 'Gym','Temple','School','Hospital','Market Place','Kids Play Area','Butterfly Park','Water Fountain','Community Hall','Outdoor Movie','Club House'],
    gallery: [
      Clubimg,
      '../../assets/gym.jpg',
      '../../assets/temple.jpg',
      '../../assets/school.jpg',
      '../../assets/hospital.jpg',
      '../../assets/market.jpg',
      '../../assets/kid.jpg',
      '../../assets/garden.jpg',
      '../../assets/water.jpg',
      '../../assets/hall.jpg',
      '../../assets/movie.jpg',
      '../../assets/club.jpg',

    ],
    mapLocation: 'https://www.google.com/maps/embed?...',  
    propertyDetails: {
      residential: '900 to 2500 sq. ft',
      commercial: '2500 to 5000 sq. ft' ,
 
    },
  },
]

function ProjectDetails() {

  const [isexp,setisexp] =useState(false)


  const MAX_LENGTH = 150;

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setisexp(!isexp);
  };



   const {id} = useParams();
   const project=projectdetails.find((p)=> p.id === parseInt(id));

   if (!project) return <div>OOPS, Project not found</div>



  return (

    <div className=" mx-auto py-12 ">
   
    <img src={project.image} alt={project.title} className="w-full h-96 object-cover mb-8" />
    <div className='max-w-7xl mx-auto px-6'>
    
    <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>
    <div className='bg-yellow-50 p-4'>
    <div
        className="text-lg text-gray-700 "
        dangerouslySetInnerHTML={{
          __html: project.description.replace('class="hidden"', isexp ? '' : 'class="hidden"')
        }}
      />
      {project.description.includes('class="hidden"') && (
        <button
          onClick={toggleExpand}
          className="text-blue-500 hover:underline mt-2"
        >
          {isexp ? 'View Less' : 'View More'}
        </button>
      )}
      </div>
    
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Project Configuration</h3>
        <ul>
          <li><strong>Bedrooms:</strong> {project.propertyDetails.residential}</li>
          <li><strong>Bathrooms:</strong> {project.propertyDetails.commercial}</li>
        
        </ul>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
        <ul className="list-disc list-inside">
          {project.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Gallery */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.gallery.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover" />
        ))}
      </div>
    </div>

    {/* Map Location */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Location</h3>
      <iframe
        src={project.mapLocation}
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="border-2 border-gray-300 rounded-lg"
      ></iframe>
    </div>

    {/* Detailed Info */}
    <p className="text-gray-700">{project.details}</p>


    </div>
  </div>



  )
}
export default ProjectDetails