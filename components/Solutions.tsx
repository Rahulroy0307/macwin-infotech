export default function Solutions() {
  const solutions = [
    {
      title: "On-Site IT Support",
      desc: "Reliable technical support for businesses and individuals."
    },   
     {
      title: "Computer Maintenance",
      desc: "Regular maintenance to keep your systems running smoothly."
    },
    {
      title: "Network Setup",
      desc: "Secure and efficient networking solutions for offices."
    },
   {
      title: "Out of The box Services",
      desc: "We handle all updates and configurations so your device is 100% ready to use the moment it’s powered on."
    },
  ];

  return (
    <section className="py-24 bg-white">

      <h2 className="text-4xl font-semibold text-center text-[#1F1F1F] mb-14">
        Our IT Solutions
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] border border-gray-200 p-8 rounded-md hover:shadow-xl hover:border-[#0067B8] transition"
          >
            <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}