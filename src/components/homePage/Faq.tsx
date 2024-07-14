export default function Faq() {
  return (
    <div className="container mb-16">
      <div className="container md:mt-[120px] mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <h1 className="uppercase text-[#7ED957] font-semibold md:text-[16px] md:tracking-[6.4px] tracking-[2px] text-[10px] text-center md:text-start">
              Support
            </h1>
            <h1 className="md:mt-8 mt-2 font-bold text-xl md:text-[50px] text-center md:text-start">
              FAQs
            </h1>
            <p className="md:mt-8 mt-3 leading-[150%] lg:w-[450px] text-center text-gray-800 md:text-start text-xs md:text-[18px]">
              Discover answers to common questions about our sports goods. From
              product details to shipping policies, we’ve got you covered.
            </p>
            <div className="md:mt-10 mt-[30px]">
              <img
                src="https://img.freepik.com/premium-photo/portrait-thoughtful-young-woman-grey-background-with-question-mark_488220-81706.jpg"
                alt=""
                className="rounded-xl w-[70%]"
              />
            </div>
          </div>
          <div className="lg:mt-0 mb-14">
            <div className="lg:px-36 w-[100%]">
              <div className="flow-root">
                <div className="divide-y divide-gray-100">
                  <details
                    className="group py-3 [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                      <h2 className="text-lg font-medium">
                        What types of sports equipment do you offer?
                      </h2>

                      <span className="relative size-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 text-[#2ECC71]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                      We offer a wide range of sports equipment including gear
                      for basketball, soccer, tennis, and fitness training.
                    </p>
                  </details>

                  <details
                    className="group py-3 [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                      <h2 className="text-lg font-medium">
                        What is your return policy?
                      </h2>

                      <span className="relative size-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 text-[#2ECC71]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                      We have a 30-day return policy. Items must be returned in
                      their original condition and packaging.
                    </p>
                  </details>

                  <details
                    className="group py-3 [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                      <h2 className="text-lg font-medium">
                        Do you offer international shipping?
                      </h2>

                      <span className="relative size-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 text-[#2ECC71]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                      Yes, we offer international shipping to many countries.
                      Shipping fees and delivery times vary depending on the
                      destination.
                    </p>
                  </details>

                  <details
                    className="group py-3 [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                      <h2 className="text-lg font-medium">
                        How can I track my order?
                      </h2>

                      <span className="relative size-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 text-[#2ECC71]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                      Once your order is shipped, you will receive a tracking
                      number via email. You can use this number to track your
                      order on our website.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
