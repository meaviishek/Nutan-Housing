
import { useEffect,useState } from 'react';
import { Vid,Custom,Plotimg,Construct,School,Old,Park,Elec,Hall,Road,Hospital,Temple } from '..'

const testimonialsData = [
  {
      name: 'Amrendra Singh',
      testimonial: 'Nutan Housing transformed my dream of owning a home into reality! The entire process was seamless and enjoyable.',

  },
  {
      name: 'Lalit Narayan Prasad',
      testimonial: 'The quality of the construction and the attention to detail is impressive. Highly recommend Nutan Housing!',
 
  },
  {
      name: 'Ashish Ranjan',
      testimonial: 'I love the amenities and the sense of community. It feels like home!',
     
  },
  {
    name: 'Prem Kant',
    testimonial: "If you're looking for a dedicated and experienced real estate professional, look no further than Nutan Housing Finance."
  },
  {
    name: 'Anil Verma',
    testimonial:             "I felt confident and well-supported every step of the way. I highly recommend Nutan Housing Finance to anyone looking for a trustworthy and skilled real estate agent company in Bihar."

  },
  {
    name: 'Praveen ',
    testimonial:            "I had a fantastic experience with Nutan Housing Finance. They made the property-buying process smooth and stress-free. I highly recommend their services for anyone looking to buy or sell a property."

  },
  {
    name: 'Surendra Prasad',
    testimonial:             "I’m thrilled with my new Plot and grateful for the outstanding support I received. I highly recommend Nutan Housing Finance to anyone in the real estate market!"

  },
  {
    name: "Sunil Kumar",
    testimonial:            "Their knowledge of the local market and their commitment to finding the right property for me were truly impressive. They were always available to answer questions and offer valuable insights, making the experience both smooth and enjoyable."

  },
  {
    name: "Pawan",
    testimonial:             "They took the time to understand exactly what I was looking for and provided insightful advice throughout the process. Their responsiveness and attention to detail made everything so much easier and less stressful."

  }
];
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
}, []);



  return (
    <div>
    <div className="relative h-screen w-full">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={Vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Content Overlay */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Nutan Housing Finance</h1>
        <p className="mt-4 text-lg md:text-2xl">Bringing your vision to life</p>
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-secondary">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <div className="w-full overflow-hidden bg-secondary whitespace-nowrap ">
        <p className="animate-marquee text-2xl p-3 text-black font-poppins">
          🎉 Welcome to Nutan Housing Finance! 🎉 Home Loans, Affordable Housing Loans, and much more!
        </p>
      </div>
      <section className="container mx-auto  text-center py-6" id="what-we-do">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">WHAT WE DO</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-4  flex-wrap">
              
                    <div  className="flex bg-white border items-center rounded-lg shadow-md mx-2 p-4 hover:scale-105 transition-all duration-300 ">
                        
                        <img src={Construct} alt="construct" className="mr-4 w-14 md:w-auto sm:mr-0 sm:h-32 sm:w-32" />
                        <div>
                        <h3 className="text-lg font-semibold mt-1">Construction</h3>
                        <p className="text-sm text-gray-600 mt-2 md:ml-2 text-justify ">Nutan Housing delivers high-quality construction services, ensuring durable and efficient project execution.</p>
                        </div>
                    </div>

                    <div  className="flex bg-white border items-center rounded-lg shadow-md mx-2 p-4 hover:scale-105 transition-all duration-300 ">
                        <img src={Plotimg} alt="construct" className="mr-4 w-14 md:w-auto sm:mr-0 sm:h-32 sm:w-32" />
                        <div>
                        <h3 className="text-lg font-semibold mt-1">Plot Selling</h3>
                        <p className="text-sm text-gray-600 mt-2 md:ml-2 text-justify">Nutan Housing offers prime plots for sale, providing ideal locations for residential and commercial development.</p>
                    </div>
                    </div>
                    <div  className="flex bg-white border items-center rounded-lg shadow-md mx-2 p-4 hover:scale-105 transition-all duration-300">
                        <img src={Custom} alt="construct" className="mr-4 w-14 md:w-auto sm:mr-0 sm:h-32 sm:w-32" />
                        <div>
                        <h3 className="text-lg font-semibold mt-1">Custom Design</h3>
                        <p className="text-sm text-gray-600 mt-2 md:ml-2 text-justify">Nutan Housing specializes in custom designs, crafting personalized spaces that meet unique client preferences.</p>
                    </div>
                    </div>
           
            </div>
        </section>


        <section className=" bg-yellow-50 py-12" id="nutan-housing">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Nutan Housing: Building Dreams into Reality</h2>
                <p className=" text-md ml-8 mr-8  text-gray-600 mb-4 text-justify">
                The company is one of the fastest growing entities in the realty sector with a difference that offers luxury for reasonable costs, excellent customer care levels with highest customer satisfaction.
 
 Nutan Housing Finance strongly believe that everyone should have a home and business they have always dreamed of having. At Nutan Housing Finance — an innovative real estate company in Rajgir — we don’t just provide customers with a plot in Bihar to build their home or business. We also provide our customers with a wide range of top-notch amenities that allow them to live a healthy and comfortable lifestyle. We also focus on building better and smarter spaces, hence, we ensure all our projects are designed to incorporate sustainable living practices. 
                </p>
            
            </div>
        </section>





        <section className="py-12 bg-gray-50" id="amenities">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Our Amenities</h2>
                <p className="text-md text-gray-600">Discover a range of amenities designed to enhance your living experience.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 ml-6 max-w-6xl md:mx-auto">
            
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Temple} alt="temple" className="w-32 h-32 " />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 ">Temple</h3>
                          
                        </div>
                    </div>
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={School} alt="temple" className="w-32 h-32" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 ">School</h3>
                          
                        </div>
                    </div>
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Hall} alt="temple" className="w-32 h-32 " />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 ">Community Hall</h3>
                          
                        </div>
                    </div>
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Park} alt="temple" className="w-32 h-32 " />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 ">Park</h3>
                          
                        </div>
                    </div>
                    <div  className="overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Hospital} alt="temple" className="w-32 h-32 " />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hospital</h3>
                          
                        </div>
                    </div>
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Elec} alt="temple" className="w-32 h-32" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Electricity</h3>
                          
                        </div>
                    </div>
                    <div  className=" overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Road} alt="temple" className="w-32 h-32" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Road</h3>
                          
                        </div>
                    </div>
                    <div  className=" rounded-lg  overflow-hidden transition-transform transform hover:scale-105">
                        <img src={Old} alt="temple" className="w-32 h-32" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Old Age Lobby</h3>
                          
                        </div>
                    </div>
                   
             
            </div>
        </section>
        <section className=" bg-yellow-50 py-12" id="nutan-housing">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Our Expertise</h2>
                <p className=" text-md ml-8 mr-8  text-gray-600 mb-4 text-justify">
                Experience a seamless process of acquiring your dreamland, as our knowledgeable team assists you in finding the perfect piece of land that meets your preferences and requirements. Whether you're looking to make the most of your current property or embark on a new land-buying journey, our comprehensive services ensure you receive the support and expertise needed to unleash the full potential of your land investment or build the house of your dreams.
                </p>
            
            </div>
        </section>





        <section className="py-12 bg-gray-50" id="testimonials">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Testimonials</h2>
                <p className="text-lg text-gray-600 mb-6">Hear from our satisfied residents.</p>
            </div>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg shadow-yellow-100 p-8 max-w-5xl transition-transform duration-300 ease-in-out">
                   
                    <p className="text-gray-600 italic mb-4">{testimonialsData[currentIndex].testimonial}</p>
                    <h3 className="text-xl font-semibold text-gray-800">{testimonialsData[currentIndex].name}</h3>
                </div>
            </div>
        </section>

  </div>

 
  )
}

export default Home