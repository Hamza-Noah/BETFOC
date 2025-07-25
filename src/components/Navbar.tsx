const Navbar = () => {
  return (
     <header className="py-5 px-4 sm:px-6 lg:px-8 bg-[#f5f9fa] backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto flex items-center">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM20.857 22.857C19.394 24.32 17.279 25.143 15.143 25.143C10.857 25.143 7.429 21.714 7.429 17.429C7.429 13.143 10.857 9.714 15.143 9.714C17.279 9.714 19.394 10.537 20.857 12L18.286 14.571C17.505 13.79 16.367 13.286 15.143 13.286C12.8 13.286 10.857 15.143 10.857 17.429C10.857 19.714 12.8 21.571 15.143 21.571C16.367 21.571 17.505 21.067 18.286 20.286L20.857 22.857Z" fill="#0D2B3E"/>
            </svg>
            <h1 className="text-2xl font-bold text-[#0D2B3E]">Finpay</h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 lg:ml-24 text-gray-600 font-medium">
            <a href="#" className="hover:text-gray-900 text-[#102d3a]">Products</a>
            <a href="#" className="hover:text-gray-900 text-[#102d3a]">Customers</a>
            <a href="#" className="hover:text-gray-900 text-[#102d3a]">Pricing</a>
            <a href="#" className="hover:text-gray-900 text-[#102d3a]">Learn</a>
          </nav>
          <button className="hidden lg:inline-block ml-auto  text-dark border-1 font-semibold py-2 px-5 rounded-lg hover:bg-teal-600 transition-colors">
          Login
          </button>
          <button className="hidden lg:inline-block ml-3 bg-[#2a8fa1] text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-600 transition-colors">
          Sign Up
          </button>
           <button className="lg:hidden inline-block text-gray-600">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
           </button>
        </div>
      </header>
  )
}

export default Navbar
