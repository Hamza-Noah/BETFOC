import { Twitter } from 'lucide-react'

const IconWrapper = ({ children, className }) => (
  <div className={`flex items-center justify-center w-12 h-12 bg-[#E0F7FA] rounded-full ${className}`}>
    {children}
  </div>
);


const AbstractAIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#0D2B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12" stroke="#0D2B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7L12 12" stroke="#0D2B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="#0D2B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" stroke="#0D2B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const Why = () => {
  return (
    <>
     
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <p className='text-[#2a8e9e]'>WHY US</p>
                     <h3 className="text-3xl sm:text-4xl text-[#0D2B3E]">Why they prefer Finpay</h3>
                </div>
                <div className="grid lg:grid-cols-2 lg:px-50 gap-8 items-start">
                    <div className="space-y-8">
                        <div className="bg-[#f5f9fa] p-8 h-60 rounded-2xl">
                            <h4 className="text-7xl pb-10 font-bold text-[#2a8e9e]">3k+</h4>
                            <p className="mt-2 text-dark-500 text-[#0d2b3e]  text-2xl ">Businesses already running on Finpay.</p>
                        </div>
                    </div>
                     <div className="space-y-8">
                        <div className="bg-[#f5f9fa] h-60 p-8 rounded-2xl">
                            <h4 className="font-bold text-xl text-[#0D2B3E]">Instantly withdraw your funds to your bank</h4>
                        </div>
                    </div>
                      <div className="bg-[#f5f9fa] p-8 flex justify-between items-center gap-3 w-full rounded-2xl col-span-2">
                            <div>
                                <h4 className="text-dark text-[#0d2b3e] pb-5 text-3xl">No asset volatility</h4>
                                <p>Genrate returns on your cash revenues without making any investemnts.</p>
                                <p className="mt-2 text-gray-500">Your money is protected from market fluctuations.</p>
                            </div>
                            <div className="mt-6">
                                <p className="font-bold text-2xl text-[#0D2B3E] -mb-15 pl-5">$1,076,500</p>
                                <svg className="w-full mt-2 bg-white p-10 rounded-2xl -mb-15" viewBox="0 0 300 100" preserveAspectRatio="none">
                                    <path d="M0 80 C 40 25, 80 70, 150 50 S 250 10, 300 40" stroke="#2DD4BF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
        </section>
 
    </>
  )
}

export default Why
