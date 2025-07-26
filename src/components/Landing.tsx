const Landing = () => {
  return (
    <section className="py-20 pb-30 px-4 sm:px-6 lg:px-8 bg-[#f5f9fa]">
      <div className="pl-20 max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0D2B3E] leading-tight tracking-tighter">
            <span className="font-bold">Get paid early</span>
            <br /> save automatically all your pay.
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
            Supports small businesses with sirnpto incluing. powerful
            integrations. and cash floe,' management
          </p>
          <div className="flex items-center mt-5 space-x-2">
            <input
              type="email"
              placeholder="Your business email"
              className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg"
            />
            <button className="flex items-center -ml-6 justify-center px-4 py-3 text-white bg-[#298d9d] rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-6">
            <div className="flex gap-6 items-center justify-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                className="h-5 opacity-80"
              />
          
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png"
                alt="Stripe"
                className="h-5 opacity-80"
              />
          
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png"
                alt="Instacart"
                className="h-4 opacity-80"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl shadow-xl p-6 w-96 max-w-sm z-10">
            <div className="flex items-center mb-6 relative z-20">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                D
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  Dipa Inhouse
                </p>
                <p className="text-sm text-gray-500">dipainhouse@gmail.co</p>
              </div>
            </div>

            <div className="mb-6 relative z-20">
              <p className="text-sm text-gray-500 mb-1">Invoice</p>
              <p className="text-3xl font-bold text-gray-900">$1,876,580</p>
              <p className="text-sm text-gray-500 mt-1">April 21 2024</p>
            </div>

            <div className="space-y-2 mb-6 relative z-20">
              <label className="flex items-center justify-between bg-gray-50 p-4 rounded-xl cursor-pointer peer-checked/credit:bg-blue-50 border border-[#2a8e9e] peer-checked/credit:ring-2 peer-checked/credit:ring-blue-500">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Credit Card</span>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  className="peer/credit form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 checked:bg-blue-600"
                />
              </label>

              <label className="flex items-center justify-between bg-gray-50 p-4 rounded-xl cursor-pointer peer-checked/bank:bg-blue-50 peer-checked/bank:ring-2 peer-checked/bank:ring-blue-500">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2m14 0a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14zm-7-2h.01"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    Bank Account
                  </span>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankAccount"
                  className="peer/bank form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 checked:bg-blue-600"
                />
              </label>
            </div>

            <button className="w-full bg-[#023347] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 relative z-20">
              Pay
            </button>
          </div>

          <div className="bg-gradient-to-br bg-[#2a8e9e] rounded-2xl shadow-lg w-50 h-66 top-[-140px] left-[-70px] md:-mt-0 md:-ml-24 relative z-20">
            <div className="flex flex-col justify-between h-full">
              <div className="px-5 pt-5 text-white text-sm font-small">Credit Card</div>
              <div className="px-5 text-white text-xl font-semibold tracking-wider pb-15">
                234 **** ****
              </div>
              <div className="p-5 flex justify-between items-end w-full bg-[#023347] rounded-br-2xl rounded-bl-2xl">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa Logo"
                  className="h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
