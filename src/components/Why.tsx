const PaymentCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative bg-white rounded-3xl shadow-xl p-6 w-96 max-w-sm z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-40 -translate-x-1/3 -translate-y-1/3"></div>

        <div className="flex items-center mb-6 relative z-20">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
            D
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-lg">Dipa Inhouse</p>
            <p className="text-sm text-gray-500">dipainhouse@gmail.co</p>
          </div>
        </div>

        <div className="mb-6 relative z-20">
          <p className="text-sm text-gray-500 mb-1">Invoice</p>
          <p className="text-3xl font-bold text-gray-900">$1,876,580</p>
          <p className="text-sm text-gray-500 mt-1">April 21 2024</p>
        </div>

        <div className="space-y-4 mb-6 relative z-20">
          <label className="flex items-center justify-between bg-gray-50 p-4 rounded-xl cursor-pointer peer-checked/credit:bg-blue-50 peer-checked/credit:ring-2 peer-checked/credit:ring-blue-500">
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
              <span className="font-medium text-gray-700">Bank Account</span>
            </div>
            <input
              type="radio"
              name="paymentMethod"
              value="bankAccount"
              className="peer/bank form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 checked:bg-blue-600"
            />
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 relative z-20">
          Pay
        </button>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl shadow-lg w-64 h-40 -ml-16 -mt-32 md:-mt-0 md:-ml-24 relative z-20">
        <div className="p-5 flex flex-col justify-between h-full">
          <div className="text-white text-sm font-medium">Credit Card</div>
          <div className="text-white text-xl font-semibold tracking-wider">
            234 **** ****
          </div>
          <div className="flex justify-between items-end">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
              alt="Visa Logo"
              className="h-5"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 9a.5.5 0 00-.5-.5h-2.5a.5.5 0 000 1h2a.5.5 0 01.5.5v1a.5.5 0 001 0V9zM3 9a.5.5 0 00-.5.5v1a.5.5 0 001 0V9.5a.5.5 0 00-.5-.5zM21 15a.5.5 0 00-.5-.5h-2.5a.5.5 0 000 1h2a.5.5 0 01.5.5v1a.5.5 0 001 0v-1a.5.5 0 00-.5-.5zM3 15a.5.5 0 00-.5.5v1a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5zM12 4a8 8 0 00-8 8 .5.5 0 001 0 7 7 0 017-7 .5.5 0 000-1zM12 20a8 8 0 008-8 .5.5 0 00-1 0 7 7 0 01-7 7 .5.5 0 000 1zM7 12a5 5 0 005 5 .5.5 0 000-1 4 4 0 01-4-4 .5.5 0 00-1 0zM17 12a5 5 0 00-5-5 .5.5 0 000 1 4 4 0 014 4 .5.5 0 001 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
