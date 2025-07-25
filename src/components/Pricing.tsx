const Pricing = () => {
  return (
    <>
      <section className="py-20 sm:py-24 bg-white-50/70 px-4 sm:px-6 lg:px-8">
        <small className="text-[#012534] font-bold block text-center mb-10 ">
          CHOOSE PLAN:
        </small>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#eff5f5] py-16 p-8 rounded-2xl flex flex-col">
            <h4 className="text-2xl font-bold text-[#0D2B3E]">Plus</h4>
            <p className="text-gray-500 mt-2">For small teams and startups</p>
            <p className="mt-8 text-4xl font-bold text-[#0D2B3E]">
              $2.99
              <span className="text-lg font-normal text-gray-500">/month</span>
            </p>
          </div>
          <div className="bg-gradient-to-br py-16 from-[#2a8e9e]  to-[#2DD4BF] text-white p-8 rounded-2xl flex flex-col relative overflow-hidden shadow-2xl shadow-teal-500/30">
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -right-10 bottom-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h4 className="text-2xl font-bold">Premium</h4>
              <p className="opacity-80 mt-2">For established businesses</p>
              <p className="mt-8 text-4xl font-bold">
                $24.99
                <span className="text-lg font-normal opacity-80">/month</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0D2B3E] text-white mx-20 rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto py-[96px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 text-center lg:text-left">
          <h3 className="text-[48px] leading-[1.2] font-bold max-w-[600px]">
            Ready to level up your payment process?
          </h3><div className="flex gap-4">
            
            <button className="bg-[#2A8E9E] text-white text-[18px] font-semibold py-[14px] px-[36px] rounded-[12px] hover:bg-[#247a8a] transition-all">
              Get Started
            </button>
            <button className="text-white border border-white text-[18px] font-semibold py-[14px] px-[36px] rounded-[12px] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
