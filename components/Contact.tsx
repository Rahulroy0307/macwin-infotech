export default function Contact() {
  return (
   <section id="contact" className="py-24 bg-gray-100 scroll-mt-24">

      <h2 className="text-4xl font-semibold text-center mb-14 text-gray-700">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600">+91 9632773141</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600">ask.macwin@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900 mb-1">Office Address 1</h4>
            <p className="text-gray-600">
              NO.7/2 FIRST FLOOR SAJJAN RAO ROAD, V.V PURAM, CHAMARAJAPET Karnataka,
              Bangalore – 560004
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900 mb-1">Office Address 2</h4>
            <p className="text-gray-600">
            # 116  1st floor 15&16 House of Lords shantalanagar St marks Road UB city
              Bangalore – 560001
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
            <p className="text-gray-600">11:00 AM – 9:00 PM</p>
          </div>

        </div>

        {/* Map */}
        <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-md">

          <iframe
            src="https://maps.google.com/maps?q=VV%20Puram%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}