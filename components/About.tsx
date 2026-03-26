export default function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">

        {/* Image */}
        <div className="w-full h-[420px] overflow-hidden rounded-lg shadow-md">
          <img
            src="/server.jpg"
            alt="IT Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>

          <h2 className="text-4xl font-semibold text-[#0067B8] mb-6">
            Who Are We?          
            </h2>

 <p className="text-gray-600 leading-relaxed">
 
            "Our mission is to deliver efficient, cost-effective IT solutions that empower businesses to stay connected and scale. 
            By combining modern tools with the expertise 
            of our internationally trained technicians, 
            we provide high-quality service and a commitment to absolute customer satisfaction."
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
             With 15 years of excellence, MACWIN INFOTECH is a trusted leader in IT services. We specialize in delivering reliable technology solutions,
              from expert computer repair and robust networking to comprehensive IT infrastructure support for both businesses and individuals
          </p>

         
        </div>

      </div>

    </section>
  );
}