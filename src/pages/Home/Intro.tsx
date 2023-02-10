import React from "react";

const Intro = () => {
  return (
    <section className="text-dark-green py-12 w-5/6 md:w-2/3 mx-auto">
      <div className="flex flex-col gap-2">
        <h3 className="text-center">
          The best landscaping service in Long Island{" "}
        </h3>
        <p className="text-center flex flex-col gap-4">
          G & J Landscaping is a family-owned and operated landscaping company
          that has been providing top-notch lawn care services to the local
          community for over 20 years. Our team of experienced landscapers are
          passionate about creating beautiful, thriving outdoor spaces for our
          clients.
          <p>
            We understand that every yard is unique and we strive to provide
            personalized solutions to meet each of our client's individual needs
            and preferences. Whether you're looking to spruce up your front yard
            with some colorful flowers or transform your backyard into a lush
            garden oasis, we've got you covered. We pride ourselves on our
            attention to detail and commitment to customer satisfaction.
          </p>
          <p>
            From the initial consultation to the final walk-through, our team
            works closely with you to bring your landscaping vision to life. We
            use only the highest quality materials and the latest techniques to
            ensure that your lawn stays healthy and vibrant for years to come.
            If you're looking for a reliable, professional, and friendly
            landscaping company, look no further than G & J Landscaping. Contact
            us today to schedule your consultation and start turning your
            outdoor dreams into a reality!
          </p>
        </p>
      </div>
    </section>
  );
};

export default Intro;
