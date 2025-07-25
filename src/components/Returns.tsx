
type StepCardProps = {
  number: string;
  title: string;
  description: string;
};


const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className="h-55 bg-white/5  p-6 pb-10 rounded-xl  shadow-sm">
    <div className="text-6xl mb-5  font-bold text-white/20">{number}</div>
    <h4 className="mt-2 text-2xl mb-4 font-semibold text-white">{title}</h4>
    <p className="mt-1 text-sm text-white/70">{description}</p>
  </div>
);

const Returns = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#013345] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-sm text-[#236f7a] fw-bolder uppercase tracking-wider mb-2">Step</p>
        <h3 className="text-3xl sm:text-4xl  max-w-3xl leading-snug">
          Maximize your returns with a <br className="hidden sm:block" />
          Reserve account that generates.
        </h3>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <StepCard
            number="1"
            title="Open your account"
            description="Sign up to Finpay and set up your account from the dashboard."
          />
          <StepCard
            number="2"
            title="Transfer your money"
            description="Move money from another account into and start to earning up."
          />
          <StepCard
            number="3"
            title="Watch your balance grow"
            description="Accessed instantly and remain insulated from market volatility."
          />
        </div>
      </div>
    </section>
  );
};

export default Returns;
