import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mt-16">
      <h1 className="text-[#7ED957] font-bold text-4xl text-center ">
        Contact Us
      </h1>
      <p className="text-black font-bold text-center mb-5">
        Our online support service is always 24 hours
      </p>
      <section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-12  lg:grid-cols-2">
            <div className="flex md:flex-row flex-col justify-around items-center gap-5">
              <div className="">
                <p className=" text-[#7ED957] font-bold">Contact Us</p>
                <h2 className=" text-4xl font-extrabold my-4">
                  How Can We Help You?
                </h2>
                <p className=" leading-10 text-gray-500 mb-7 text-left text-xl">
                  We're here to assist with any questions or concerns you may
                  have. Whether you need support with an order, have inquiries
                  about our products, or require assistance with anything else,
                  our team is ready to help. Please reach out to us using the
                  form below, and we will get back to you as soon as possible.
                  Your satisfaction is our priority.
                </p>
                <div className=" flex items-center gap-5 text-xl">
                  <a
                    target="blank"
                    href="https://www.facebook.com/roknujjamansajib"
                    className="bg-[#7ED957]  rounded-full text-white text-xl p-2"
                  >
                    <FaFacebook></FaFacebook>
                  </a>
                  <a
                    target="blank"
                    href="https://twitter.com/Roknuzzaman5546"
                    className="bg-[#7ED957]  rounded-full text-white text-xl p-2"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/roknujjamansajib/"
                    className="bg-[#7ED957]  rounded-full text-white text-xl p-2"
                  >
                    <FaInstagram></FaInstagram>
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/"
                    className="bg-[#7ED957]  rounded-full text-white text-xl p-2"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform rounded-lg bg-[#7ED957] hover:bg-[#545454] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
