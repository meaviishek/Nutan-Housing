import { useEffect, useState } from 'react';
import { Vid, Custom, Plotimg, Construct, School, Old, Park, Elec, Hall, Road, Hospital, Temple } from '..';

const testimonialsData = [
  { name: 'Amrendra Singh', testimonial: 'Nutan Housing transformed my dream of owning a home into reality! The entire process was seamless and enjoyable.' },
  { name: 'Lalit Narayan Prasad', testimonial: 'The quality of the construction and the attention to detail is impressive. Highly recommend Nutan Housing!' },
  { name: 'Ashish Ranjan', testimonial: 'I love the amenities and the sense of community. It feels like home!' },
  { name: 'Prem Kant', testimonial: "If you're looking for a dedicated and experienced real estate professional, look no further than Nutan Housing Finance." },
  { name: 'Anil Verma', testimonial: "I felt confident and well-supported every step of the way. Highly recommend Nutan Housing Finance in Bihar." },
  { name: 'Praveen', testimonial: "I had a fantastic experience. They made the property-buying process smooth and stress-free." },
  { name: 'Surendra Prasad', testimonial: "I’m thrilled with my new Plot and grateful for the outstanding support." },
  { name: 'Sunil Kumar', testimonial: "Their knowledge of the local market and commitment to finding the right property was impressive." },
  { name: 'Pawan', testimonial: "Their responsiveness and attention to detail made everything easier and less stressful." }
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight">Welcome to Nutan Housing Finance</h1>
            <p className="mt-4 text-lg md:text-2xl">Bringing your vision to life</p>
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-2xl transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden bg-secondary whitespace-nowrap ">
        <p className="animate-marquee text-2xl p-3 text-black font-poppins">
          🎉 Welcome to Nutan Housing Finance! 🎉 Home Loans, Affordable Housing Loans, and much more!
        </p>
      </div>

      {/* What We Do Section */}
      <section className="container mx-auto py-10" id="what-we-do">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-primary">WHAT WE DO</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:gap-6 items-center m-2">
          {[{
            title: "Construction", img: Construct, desc: "Nutan Housing delivers high-quality construction services, ensuring durable and efficient project execution."
          }, {
            title: "Plot Selling", img: Plotimg, desc: "Nutan Housing offers prime plots for sale, providing ideal locations for residential and commercial development."
          }, {
            title: "Custom Design", img: Custom, desc: "Nutan Housing specializes in custom designs, crafting personalized spaces that meet unique client preferences."
          }].map((service, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-lg p-6  lg:hover:scale-105 transition-transform">
              <img src={service.img} alt={service.title} className="w-20 h-20 mx-auto mb-4" />
              <div className='ml-4'>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nutan Housing Info */}
      <section className="bg-yellow-100 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Nutan Housing: Building Dreams into Reality</h2>
          <p className="text-md text-gray-700 max-w-4xl mx-auto">Nutan Housing Finance offers luxury homes for reasonable costs, excellent customer care, and high satisfaction. We believe everyone deserves their dream home or business. From sustainable living spaces to exceptional amenities, Nutan Housing Finance ensures a smart, comfortable lifestyle.</p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-8 bg-gray-100" id="amenities">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Our Amenities</h2>
          <p className="text-lg text-gray-600">Discover amenities designed to enhance your living experience.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mx-2 lg:mx-8">
          {[{ img: Temple, title: "Temple" }, { img: School, title: "School" }, { img: Hall, title: "Community Hall" }, { img: Park, title: "Park" }, { img: Hospital, title: "Hospital" }, { img: Elec, title: "Electricity" }, { img: Road, title: "Road" }, { img: Old, title: "Old Age Lobby" }].map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              <img src={amenity.img} alt={amenity.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-md text-center font-semibold">{amenity.title}</h3>
            </div>
          ))}
        </div>
      </section>


      <section className=" bg-yellow-100 py-12" id="nutan-housing">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Our Expertise</h2>
                <p className=" text-md text-gray-700 max-w-4xl mx-auto">
                Experience a seamless process of acquiring your dreamland, as our knowledgeable team assists you in finding the perfect piece of land that meets your preferences and requirements. Whether you're looking to make the most of your current property or embark on a new land-buying journey, our comprehensive services ensure you receive the support and expertise needed to unleash the full potential of your land investment or build the house of your dreams.
                </p>
            
            </div>
        </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50" id="testimonials">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 mb-6">Hear from our satisfied residents.</p>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 ease-in-out">
            <p className="text-gray-600 italic mb-4">"{testimonialsData[currentIndex].testimonial}"</p>
            <h3 className="text-xl font-semibold text-gray-800">{testimonialsData[currentIndex].name}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
