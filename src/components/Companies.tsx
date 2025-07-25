const Companies = () => {
  return (
    <>
      <section className="py-20 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <small className="text-[#2a8e9e] font-bold mb-5">OUR MISSION</small>
          <h3 className="text-3xl sm:text-4xl text-[#0D2B3E]">
            We've helped <br /> innovative companies
          </h3>
          <p className="mt-6">
            Handreds of all sizes and across all industries <br />
            here made a big improvments with us
          </p>
          <div className="mt-16 flex justify-center gap-15">
            <div>
              <p className="text-6xl  text-[#141627]">24%</p>
              <p className="mt-2 text-gray-500">Revenue business</p>
            </div>
            <div>
              <p className="text-6xl  text-[#141627]">180K</p>
              <p className="mt-2 text-gray-500">In annual revenue</p>
            </div>
            <div>
              <p className="text-6xl  text-[#141627]">10+</p>
              <p className="mt-2 text-gray-500">Months of runway</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
