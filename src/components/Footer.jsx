import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="mb-2 uppercase">
              Email:{" "}
              <a
                href="mailto:someone@example.com"
                className="text-indigo-400 hover:text-indigo-500"
              >
                rutbaali1990@gmail.com
              </a>
            </p>
            <p className="mb-2 uppercase">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-indigo-400 hover:text-indigo-500"
              >
                +123 456 7890
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Follow Me</h2>

            <div className="flex gap-4">
              {/* linkedin */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:translate-y-2 duration-300"
              >
                <CiLinkedin />
              </a>
              {/* github */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:translate-y-2 duration-300"
              >
                <FaGithub />
              </a>
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:translate-y-2 duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="flex flex-col justify-center md:justify-start lg:justify-end">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4 md:mt-0 lg:mt-0 w-full md:w-auto">
              <a href="/src/assets/Rutba-Ali-Resume.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Rutba Ali Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
