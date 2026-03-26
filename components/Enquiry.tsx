"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  message: string;
}

export default function Enquiry() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Brand: ${formData.brand}
Model: ${formData.model}

Enquiry:
${formData.message}
`;

  const whatsappURL = `https://wa.me/919632773141?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <section className="py-24 bg-gray-50 text-black">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-black">
            Laptop Enquiry
          </h2>

          <p className="mt-3 text-black">
            Tell us what laptop you are looking for and our team will contact you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-xl font-semibold mb-6 text-black">
              Popular Laptop Brands
            </h3>

            <div className="grid grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex justify-center">
                <img src="/lenovo.png" className="h-10" />
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex justify-center">
                <img src="/dell.png" className="h-10" />
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex justify-center">
                <img src="/hp.png" className="h-10" />
              </div>

            </div>

            <img
              src="/laptop.png"
              alt="Laptop repair"
              className="rounded-xl shadow-lg mt-10"
            />

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white shadow-xl rounded-2xl p-10">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
                required
              />

              {/* Brand */}
              <select
                name="brand"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
                required
              >
                <option value="">Select Brand</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
              </select>

              {/* Model */}
              <input
                type="text"
                name="model"
                placeholder="Laptop Model (Example: Dell Inspiron 15)"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
              />

              <textarea
                name="message"
                placeholder="Your enquiry..."
                rows={4}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg text-black"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}