import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Content = () => {
  return (
    <div className="text-dark-green py-24 w-5/6 md:w-2/3 mx-auto text-center flex flex-col gap-8">
      <p className="text-2xl mx:text-4xl">
        Ready to upgrade your outdoor space?
      </p>

      <p>
        We are located in Oceanside, New York and service houses and clients in
        Long Island around the 5 towns areas.
      </p>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <BsFillTelephoneFill />
          <span>(516) 949-1482</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <span>jg4341751@gmail.com</span>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          loading="lazy"
          title="G & J Landscaping"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Oceanside,%20New%20York+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Content;
