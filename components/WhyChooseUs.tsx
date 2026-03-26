export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div>
          <img
            src="/why.jpg"
            alt="Laptop Repair Service"
            className="rounded-20xl "
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div>

          <h2 className="text-4xl font-semibold text-black mb-4">
            Why Choose MACWIN INFOTECH ?
          </h2>

          <div className="w-16 h-1 bg-[#0067B8] mb-8"></div>

          <div className="space-y-6">

            <div>
              <h4 className="font-semibold text-black mb-2">
                Experience You Can Trust
              </h4>

              <p className="text-black leading-relaxed">
               With over 15 years of industry-leading experience, MACWIN INFOTECH has established itself as a premier destination for
                specialized laptop and desktop services. We don't just fix computers; we optimize your digital life.
                Our decade-and-a-half journey has been built on a foundation of technical precision and unwavering customer trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-2">
                Specialized Hardware Expertise
              </h4>

              <p className="text-black leading-relaxed">
                We have pivoted our core focus to master the complexities of modern computing. Whether it is high-end gaming rigs, enterprise workstations, or personal laptops, our seasoned technicians apply 15 years of diagnostic knowledge to provide hardware troubleshooting and system optimizations that others miss.
Commitment to Performance
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-2">
                Commitment to Performance
              </h4>

              <p className="text-black leading-relaxed">
              We believe technology should be an asset, not a hurdle. By combining our deep technical heritage with the latest software tools, we deliver fast, cost-effective, 
              and dependable solutions designed to minimize downtime and maximize your machine's performance.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}