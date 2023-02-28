import React from "react";

const Content = () => {
  return (
    <div className="text-dark-green py-24 w-5/6 md:w-2/3 mx-auto text-center">
      <p>Ready to upgrade your outdoor space?</p>
      <p>Call us at (516) 949-1482 or email us at jg4341751@gmail.com</p>

      <p>
        We are located in Oceanside, New York and service houses and clients in
        Long Island around the 5 towns areas.
      </p>
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
