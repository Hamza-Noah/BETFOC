import { Zap,Users, ShieldCheck  } from "lucide-react";

const IconWrapper = ({ children, className }) => (
  <div className={`flex items-center justify-center w-12 h-12 bg-[#E0F7FA] rounded-full ${className}`}>
    {children}
  </div>
);

const Experince = () => {
  return (
    <>
       <section className="py-25 bg-[#f5f9fa] -mt-20 sm:py-24-50/70">
            <div className="ml-20 p-20 rounded-2xl bg-white max-w-[1280px] mx-auto">
                <div className=" flex justify-between items-center">
                    <div>
                        <p className="text-[#278fa7] mb-2">FUTURE PAYMENT</p>
                        <h3 className="text-3xl sm:text-4xl text-[#0D2B3E]">Experience that grows <br /> with your scale.</h3>
                    </div>
                    <p>Design a function operating system that works for <br /> your business and streamlined cash flow <br /> management</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    <div className="p-6">
                        <IconWrapper><Zap className="w-6 h-6 text-[#0284C7]" /></IconWrapper>
                        <h4 className="mt-5 font-bold text-xl text-[#0D2B3E]">Free transfers</h4>
                        <p className="mt-2 text-gray-500">Send and receive money with zero fees, no matter where you are.</p>
                    </div>
                    <div className="p-6">
                        <IconWrapper><Users className="w-6 h-6 text-[#0284C7]" /></IconWrapper>
                        <h4 className="mt-5 font-bold text-xl text-[#0D2B3E]">Multiple account</h4>
                        <p className="mt-2 text-gray-500">Manage all your business and personal accounts from one dashboard.</p>
                    </div>
                    <div className="p-6">
                        <IconWrapper><ShieldCheck className="w-6 h-6 text-[#0284C7]" /></IconWrapper>
                        <h4 className="mt-5 font-bold text-xl text-[#0D2B3E]">Unmatched security</h4>
                        <p className="mt-2 text-gray-500">Your funds are protected by industry-leading security protocols.</p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Experince
