export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Our Services
        </h2>

        <div className="w-16 h-1 bg-[#0067B8] mx-auto mb-12"></div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Service 1 */}
           <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/buing.jpg"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sales and Buyback
            </h3>
            <p className="text-gray-600">
              Get the best tech without the stress. We sell for all leading brands laptop that are customized according to coustomer needs and ready to use right out of the box.
              From gaming rigs to office workstations, find the perfect device at a price that makes sense.
            </p>
          </div>
          

          {/* Service 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/repair.jpg"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Laptop & Desktop Repair
            </h3>
            <p className="text-gray-600">
              We provide reliable repair services for laptops and desktop
              computers of all leading brands with genuine spare parts, including hardware troubleshooting, software
              installation, and system optimization.
            </p>
          </div>
         

          {/* Service 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/network.jpg"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Networking Solutions
            </h3>
            <p className="text-gray-600">
              Our team designs and maintains secure and efficient network
              systems for homes and offices, ensuring stable connectivity
              and smooth data communication.
            </p>
          </div>

          {/* Service 4 */}
          

          {/* Service 5 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/software.png"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Software Installation
            </h3>
            <p className="text-gray-600">
              We assist with installation and configuration of operating
              systems, security software, and productivity tools required
              for daily business operations.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/support.jpg"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              IT Support & Maintenance
            </h3>
            <p className="text-gray-600">
              Our ongoing IT support and maintenance services help
              businesses maintain stable systems, prevent downtime,
              and ensure smooth technology operations.
            </p>
          </div>
           <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="/oncall.png"
              alt="Laptop Repair"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real time on call support
            </h3>
            <p className="text-gray-600">
              We assist with installation and configuration of operating
              systems, security software, and productivity tools required
              for daily business operations.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}