import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      {/* Large background logo */}
      <Image
        src="/macwin-logo1.png"
        alt="Macwin Background Logo"
        width={1000}
        height={1000}
        className="absolute opacity-10 z-20"
        priority
      />
  {/* IMAGE OVERLAY */}
     <Image
  src="/overlay.png"
  alt="overlay"
  fill
  className=" opacity-90 relative min-h-screen pointer-events-none flex items-center justify-center margin top-20 bg-[url('/overlay.png')] bg-cover bg-[center_0%]"
/>
  <div className="absolute inset-0 margin top-10 px"></div>
      

      {/* Content */}
     <div className="relative z-30 flex flex-col items-center margin bottom-10 text-black px-6">

         <h1 className="text-5xl text-gray-700 font-semibold mb-4">
          MacWin InfoTech
        </h1> 

         <p className="text-xl text-gray-700 mb-6">
          Tech Solutions, Powered by Care
        </p>

        <p className="max-w-xl mx-auto text-black">
          Professional IT services powered by Windows 11 Professional OS including Commercial and personal Laptop Sales, Laptop Repair, Networking,
           and Enterprise IT Solutions in Bangalore and across all cities in India.
        </p>

 <a href="#contact" className= "mt-8 inline-block px-8 py-3 rounded border hover:bg-gray-400 transition"
>
  Get Support
</a>
      </div>
{/* Partner Logos */}
<div className="absolute bottom-10 w-full flex flex-col items-center hover:scale-110 transition">

  <p className="text-black text-sm mb-4 tracking-wide">
    Trusted Technology Partners
  </p>

  <div className="flex items-center gap-10 opacity-100">

    <img
      src="/lenovo.png"
      alt="Lenovo Partner"
      className="h-25 object-contain"
    />

    <img
      src="/ell.png"
      alt="Dell Partner"
      className="h-9 object-contain"
    />

    <img
      src="/hp.png"
      alt="HP Partner"
      className="h-10 object-contain"
    />

  </div>

</div>
    </section>
  );
}