const CTA = () => {
  return (
    <section className="py-20 md:py-28 text-center relative bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready for a Better Home Service?
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-10 leading-8">
          Join over 2 million families who trust us for their daily home
          maintenance. Experience the professional difference today.
        </p>

        <div className="flex justify-center gap-4">
          <button className="emerald-gradient text-white font-semibold text-sm px-10 py-5 rounded-2xl shadow-xl hover:shadow-green-600/30 hover:-translate-y-1 transition-all">
            Book a Service Now
          </button>
        </div>

        <p className="mt-8 text-gray-600 text-sm font-semibold">
          First service? Use code{" "}
          <span className="text-green-600 font-bold">WELCOME25</span> for 25%
          off.
        </p>
      </div>
    </section>
  );
};

export default CTA;