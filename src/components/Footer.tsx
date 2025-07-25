const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM20.857 22.857C19.394 24.32 17.279 25.143 15.143 25.143C10.857 25.143 7.429 21.714 7.429 17.429C7.429 13.143 10.857 9.714 15.143 9.714C17.279 9.714 19.394 10.537 20.857 12L18.286 14.571C17.505 13.79 16.367 13.286 15.143 13.286C12.8 13.286 10.857 15.143 10.857 17.429C10.857 19.714 12.8 21.571 15.143 21.571C16.367 21.571 17.505 21.067 18.286 20.286L20.857 22.857Z" fill="#0D2B3E"/>
              </svg>
              <h1 className="text-2xl font-bold text-[#0D2B3E]">Finpay</h1>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-[#0D2B3E]">Solutions</h5>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Small Business</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Freelancers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Taxes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#0D2B3E]">Company</h5>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contract</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-[#0D2B3E]">Learn</h5>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Ebooks</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Templates</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#0D2B3E]">Follow us on</p>
            <div className="flex mt-4 space-x-4 text-gray-400 hover:text-gray-800">
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.177.013.355.013.533 0 5.458-4.155 11.752-11.752 11.752-2.339 0-4.514-.683-6.344-1.857a8.306 8.306 0 0 0 6.113-1.708 4.13 4.13 0 0 1-3.856-2.867 4.156 4.156 0 0 0 1.863-.07 4.129 4.129 0 0 1-3.307-4.047v-.053a4.09 4.09 0 0 0 1.867.518 4.129 4.129 0 0 1-1.277-5.505 11.717 11.717 0 0 0 8.51 4.313 4.655 4.655 0 0 1-.103-.944 4.127 4.127 0 0 1 7.14-2.822 8.16 8.16 0 0 0 2.617-1.002 4.117 4.117 0 0 1-1.813 2.273 8.212 8.212 0 0 0 2.371-.641 8.67 8.67 0 0 1-2.056 2.132z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.09 0 1.98-.88 1.98-1.98A1.98 1.98 0 0 0 5 3.5zm.02 4.95H3V21h2V8.45zM8.99 8.45H7V21h2v-6.6c0-1.47.38-2.6 2.01-2.6 1.61 0 1.62 1.51 1.62 2.69V21h2v-7.2c0-3.59-1.92-5.25-4.49-5.25-2.07 0-2.89 1.15-3.13 1.95z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.007 3.657 9.132 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.132 22 17.007 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Finpay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
