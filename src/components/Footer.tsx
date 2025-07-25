
const Footer = () => {
  return (
    <>
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
                    <h5 className="font-semibold text-[#0D2B3E]">Laern</h5>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-gray-900">Ebooks</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-gray-900">Guides</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-gray-900">Tamplates</a></li>
                    </ul>
                </div>
                 <div>
                    <p className="font-semibold text-[#0D2B3E]">Follow us on</p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-gray-400 hover:text-gray-800"><Twitter size={20}/></a>
                        <a href="#" className="text-gray-400 hover:text-gray-800"><Linkedin size={20}/></a>
                        <a href="#" className="text-gray-400 hover:text-gray-800"><Facebook size={20}/></a>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-200 pt-8 text-center text-gray-500">
                <p>&copy; 2024 Finpay. All rights reserved.</p>
            </div>
          </div>
      </footer> 
    </>
  )
}

export default Footer
