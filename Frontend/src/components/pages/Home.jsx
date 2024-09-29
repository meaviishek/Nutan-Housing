import { useEffect, useState } from 'react';
import { Vid, Custom, Plotimg, Construct, School, Old, Park, Elec, Hall, Road, Hospital, Temple,Scrolltop } from '..';

const testimonialsData = [
  { name: 'Amrendra Singh', testimonial: 'Nutan Housing transformed my dream of owning a home into reality! The entire process was seamless and enjoyable.' },
  { name: 'Lalit Narayan Prasad', testimonial: 'The quality of the construction and the attention to detail is impressive. Highly recommend Nutan Housing!' },
  { name: 'Ashish Ranjan', testimonial: 'Nutan Housing was fantastic! Great service, clear communication, and a friendly team. They helped me find my dream home effortlessly.' },
  { name: 'Prem Kant', testimonial: "If you're looking for a dedicated and experienced real estate professional, look no further than Nutan Housing Finance." },
  { name: 'Anil Verma', testimonial: "I felt confident and well-supported every step of the way. Highly recommend Nutan Housing Finance in Bihar." },
  { name: 'Praveen', testimonial: "They took the time to understand exactly what I was looking for and provided insightful advice throughout the process. Their responsiveness and attention to detail made everything so much easier and less stressful." },
  { name: 'Surendra Prasad', testimonial: "Nutan Housing made my home-buying experience easy and stress-free. The team was helpful, professional, and found the perfect property." },
  { name: 'Sunil Kumar', testimonial: "Their knowledge of the local market and their commitment to finding the right property for me were truly impressive. They were always available to answer questions and offer valuable insights, making the experience both smooth and enjoyable." },
  { name: 'Pawan', testimonial: "Their responsiveness and attention to detail made everything easier and less stressful." }
];

function Home({openEnq}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      <Scrolltop/> 
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">Welcome to Nutan Housing Finance</h1>
            <p className="mt-4 text-lg md:text-2xl">Bringing your vision to life</p>
            <button className="mt-8 px-8 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-2xl transition duration-300">
             <a href='tel:+919471613137'> Know More</a>
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
      <section className="mx-auto md:mt-8 max-w-10xl text-center p-6 " id="what-we-do">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-primary">WHAT WE DO</h2>
        <div className=" mx-auto max-w-5xl items-stretch space-y-6 text-left sm:flex sm:space-y-0 sm:space-x-10 sm:text-center">
          {[{
            title: "Construction", img: Construct, desc: "Nutan Housing delivers high-quality construction services, ensuring durable and efficient project execution."
          }, {
            title: "Plot Selling", img: Plotimg, desc: "Nutan Housing offers prime plots for sale, providing ideal locations for residential and commercial development."
          }, {
            title: "Custom Design", img: Custom, desc: "Nutan Housing specializes in custom designs, crafting personalized spaces that meet unique client preferences."
          }].map((service, index) => (
            <div key={index} className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
              <img src={service.img} alt={service.title} className="mr-4 w-20 md:w-auto sm:mr-0 sm:h-32 sm:w-32" />
              <div className='ml-4'>
              <h3 className="text-lg text-primary font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 text-justify">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nutan Housing Info */}
      <section className="bg-yellow-100 mt-14 text-center">
        <div className="container mx-auto p-8  md:p-16 ">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Welcome to Nutan Housing Finance</h2>
          <p className="text-md text-justify  mt-4 md:pl-16 md:pr-16">The company is one of the fastest growing entities in the realty sector with a difference that offers luxury for reasonable costs, excellent customer care levels with highest customer satisfaction. Nutan Housing Finance strongly believe that everyone should have a home and business they have always dreamed of having. At Nutan Housing Finance — an innovative real estate company in Rajgir — we don’t just provide customers with a plot in Bihar to build their home or business. We also provide our customers with a wide range of top-notch amenities that allow them to live a healthy and comfortable lifestyle. We also focus on building better and smarter spaces, hence, we ensure all our projects are designed to incorporate sustainable living practices.</p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="container mx-auto mt-6 mb-6 " >
        <div className=" text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">Amenities</h2>
          <p className="text-sm md:text-lg text-gray-600">Discover amenities designed to enhance your living experience.</p>
        </div>
        <div className="m-3 grid  mx-auto lg:grid-cols-4 grid-cols-2 mt-10  md:max-w-8xl flex-wrap gap-10">
          {[{ img: Temple, title: "Temple" }, { img: School, title: "School" }, { img: Hall, title: "Community Hall" }, { img: Park, title: "Park" }, { img: Hospital, title: "Hospital" }, { img: Elec, title: "Electricity" }, { img: Road, title: "Road" }, { img: Old, title: "Old Age Lobby" }].map((amenity, index) => (
            <div key={index} className="grid gap-4 justify-items-center text-center">
              <img src={amenity.img} alt={amenity.title} className="w-20 h-20 mx-auto mb-4 hover:scale-105 transition-all duration-400" />
              <h3 className="text-md text-center font-semibold ">{amenity.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center ">
  <button onClick={openEnq} className="bg-primary text-white py-2 px-4 rounded hover:bg-yellow-500">Know More</button>
</div>
      </section>


      <section className=" bg-yellow-100 mt-14 text-center" >
            <div className="container mx-auto p-8  md:p-16 ">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Our Expertise</h2>
                <p className=" text-md text-justify  mt-4 md:pl-16 md:pr-16 ">
                Experience a seamless process of acquiring your dreamland, as our knowledgeable team assists you in finding the perfect piece of land that meets your preferences and requirements. Whether you're looking to make the most of your current property or embark on a new land-buying journey, our comprehensive services ensure you receive the support and expertise needed to unleash the full potential of your land investment or build the house of your dreams.
                </p>
            
            </div>
        </section>

      {/* Testimonials */}
      <section className="py-8 bg-gray-50" id="testimonials">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-1">Testimonials</h2>
          <p className="text-lg text-gray-600 mb-6">Hear from our satisfied residents.</p>
        </div>
        <div className="max-w-7xl mx-auto text-center h-36">
          <div className="bg-white rounded-lg shadow-md shadow-primary p-4 transition-transform duration-300 ease-in-out">
            <p className="text-gray-600 text-md mb-4">{testimonialsData[currentIndex].testimonial}</p>
            <h3 className="text-lg text-end font-semibold text-gray-800">-{testimonialsData[currentIndex].name}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
