import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-light-gray text-dark-green">
      <div className="w-5/6 mx-auto py-8">
        <div className="flex flex-col items-center gap-2">
          <h2>LOGO</h2>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />
            <span>(516) 949-1482</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail />
            <span>jg4341751@gmail.com</span>
          </div>
          <small>Copyright &copy; 2023 G & J Landscaping</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
