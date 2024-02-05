import { HiMail, HiPhone } from "react-icons/hi";  
const Footer = () => {
  return (
    <footer className='bg-tertiary py-12 mx-24'>
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-4">
            <h1 className="text-3xl">OELLO DIGITAL</h1>
            <div className="flex items-center text-xl gap-3">
              <HiMail/>
              <h2>oellodigital@gmail.com</h2>
            </div>
            <div className="flex items-center text-xl gap-3">
              <HiPhone/>
              <h2>+2348106286358</h2>
            </div>
          </div>


          <div className="text-sm space-y-4">
            <h1 className="text-xl">COMPANY</h1>
            <h4 >About Us</h4>
            <h4>Features</h4>
            <h4>Watch Our Videos</h4>
            <h4>Contact Us</h4>
          </div>

          <div className="text-sm space-y-4">
            <h1 className="text-xl">OUR POLICIES</h1>
            <h4>Privacy Policy</h4>
            <h4>Terms of Use</h4>
            <h4>Cookies Policy</h4>
            <h4>GDPR Policy</h4>
          </div>

          <div className="text-sm space-y-4">
            <h1 className="text-xl">SOCIAL MEDIA</h1>
            <div className="flex items-center gap-3">
              <HiPhone/>
              <h2>Facebook</h2>
            </div>
            <div className="flex items-center gap-3">
              <HiPhone/>
              <h2>Twitter</h2>
            </div>
            <div className="flex items-center gap-3">
              <HiPhone/>
              <h2>Instagram</h2>
            </div>
            <div className="flex items-center gap-3">
              <HiPhone/>
              <h2>Linkedin</h2>
            </div>
          </div>
        </div>
     </footer>
  );
};

export default Footer;
