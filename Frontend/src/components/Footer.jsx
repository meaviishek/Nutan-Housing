
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Logo } from '.';
function Footer({openLogin,openEnq}) {
  return (
    <div>





    <footer className="bg-[#181818] text-white py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4  md:gap-24 ">
      
      {/* Company Info */}
      <div className="space-y-4 ">
        <div className="flex ">
          <img
            src={Logo}
            alt="Nutan Housing Finance"
            className="w-12 h-8"
          />
          <h2 className="text-xl font-bold">Nutan Housing Finance</h2>
        </div>
        <div className="text-gray-400">
          <p><a href="mailto:info@nutanhousing.com" className="hover:text-white">info@nutanhousing.com</a></p>
          <p><a href="tel:+919471613137" className="hover:text-white">+91 9471613137</a> <a href="tel:+918539804930" className="hover:text-white">+91 8539804930</a></p>
          <p>Jhunki Baba Road, Patel Nagar,<br />Near RDH School, Rajgir, 803116</p>
        </div>
      </div>

      {/* Quick Links */}

      <div>
        <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
        <ul className="space-y-2 mt-4 text-gray-400 text-md">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/blogs" className="hover:text-primary">Gallery</Link></li>
          <li><Link to="/emi_calc" className="hover:text-primary">EMI Calculator</Link></li>
          <li><Link  onClick={openLogin} className="hover:text-primary">Become an Advisor</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-lg font-semibold text-primary">Support</h3>
        <ul className="space-y-2 mt-4 text-gray-400">
          <li><Link onClick={openEnq} className="hover:text-primary">Enquire Now</Link></li>
          <li><Link to="/support" className="hover:text-primary">Customer Support</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-primary">Privacy & Policy</Link></li>
          <li><Link to="/terms-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
        </ul>
      </div>
 
      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold text-primary">Follow Us On</h3>
        <div className="flex space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
      <p>© Nutan Housing Finance 2024, All rights reserved.</p>
      <p>Developed by <a href="https://prachar.com" target="_blank" rel="noreferrer" className="hover:text-primary">prachar.com</a></p>
    </div>
  </footer>
  </div>
  )
}

export default Footer