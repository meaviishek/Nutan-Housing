import React from 'react'
import { Contactimg, Gmailimg, Locimg, Phoneimg, Whatsappimg } from '../indeximages'

function Contact() {
  return (
    <div className="contact-page bg-gray-50">
    {/* Header Image */}
    <div className="header-image">
      <img src={Contactimg} alt="Header" className="w-full h-98 object-cover" />
    </div>

    {/* Enquiry Form Section */}
    <div className="container mx-auto mt-10 px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-primary">Enquire Now</h2>

      <div className="flex flex-col lg:flex-row mt-8 lg:space-x-8">
        {/* Form Section */}
        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Full Name" />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Phone Number" />
            </div>

            <div>
              <label className="block text-gray-700">Address</label>
              <textarea className="w-full border border-gray-300 rounded-md p-2" placeholder="Your Address"></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-600">
                I authorize Nutan Housing Finance to contact me via Email, SMS, WhatsApp, and Call.
              </p>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-gold-700 transition">Send</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-center bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="flex items-center space-x-4">
          <div className="shrink-0">
                        <div className="inline-block rounded-md bg-yellow-200 p-2 text-primary">
                          <img src={Gmailimg} className="w-8 h-8"/>
                        </div>
                      </div>
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p>info@nutanhousing.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <div className="shrink-0">
                        <div className="inline-block rounded-md bg-yellow-200 p-2 text-primary">
                          <img src={Locimg} className="w-8  h-8"/>
                        </div>
                      </div>
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p>Jhunki Baba Road, Patel Nagar, Near RDH School, Rajgir, 803116</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <div className="shrink-0">
                        <div className="inline-block rounded-md bg-yellow-200 p-2 text-primary">
                          <img src={Whatsappimg} className="w-8 h-8"/>
                        </div>
                      </div>
              <h4 className="font-semibold text-lg">WhatsApp</h4>
              <p>+91 8539804930</p>
            </div>
          

          <div className="flex items-center space-x-4">
          <div className="shrink-0">
                        <div className="inline-block rounded-md bg-yellow-200 p-2 text-primary">
                          <img src={Phoneimg} className='w-8 h-8'/>
                      </div>
           
                      </div>
              <h4 className="font-semibold text-lg">Mobile</h4>
              <p>+91 9471613137</p>
           
          </div>



        </div>
      </div>

      {/* Office Location Section */}
      <div className="mt-12 mb-8">
        <h3 className="text-2xl font-bold text-primary text-center ">Our Office Location</h3>
        <div className="mt-4">
          {/* Use Google Maps or other embedding method */}
          <iframe
            title="Nutan Housing Office Location"
            src="https://www.google.com/maps/embed?pb=..."
            className="w-full h-96 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact