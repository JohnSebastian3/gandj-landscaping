import { TfiIdBadge } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const Qualities = () => {
  return (
    <section className="text-slate bg-green  py-24 ">
      <h3 className="mb-12 text-center">How we stand out</h3>
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 py-24  text-center">
        <div className="flex flex-col gap-2 py-8 border-b sm:border-r sm:px-4 border-slate border-opacity-10">
          <div className="flex flex-col gap-4 items-center">
            <SlBadge className="text-4xl" />
            <h3>Experience & Expertise</h3>
          </div>
          <p>
            We have a team of experienced professionals with extensive knowledge
            and skills in all aspects of landscaping.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8 border-b sm:px-4 border-slate border-opacity-10">
          <div className="flex flex-col gap-4 items-center">
            <TfiIdBadge className="text-4xl" />
            <h3>Professionalism</h3>
          </div>
          <p>
            We conduct business in a professional manner, including timely
            response to inquiries, clear and concise contracts, and ethical
            practices.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8 border-b sm:border-r sm:px-4 sm:border-b-0 border-slate border-opacity-10">
          <div className="flex flex-col gap-4 items-center">
            <IoIosTimer className="text-4xl" />
            <h3>Timely Delivery</h3>
          </div>
          <p>
            We complete our projects within the agreed time frame, ensuring that
            it does not cause any inconvenience to you.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:px-4 py-8">
          <div className="flex flex-col gap-4 items-center">
            <HiOutlineWrenchScrewdriver className="text-4xl" />
            <h3>Ongoing Maintenance</h3>
          </div>
          <p>
            We provide ongoing maintenance services to ensure that the landscape
            remains healthy and beautiful for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
