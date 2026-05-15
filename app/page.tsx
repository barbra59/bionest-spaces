import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 px-6">

        <h1 className="text-5xl font-bold text-green-900">
          Bionest Spaces
        </h1>

        <p className="mt-6 text-lg max-w-2xl text-gray-700">
          A biophilic landscape architecture and interior design studio creating nature-inspired, sustainable environments that connect people to place.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-green-800 text-white rounded-full">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-green-800 text-green-800 rounded-full">
            Contact
          </a>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-green-900">About Us</h2>

        <p className="mt-6 text-gray-700 leading-7">
          Bionest Spaces is a landscape architecture and interior design studio focused on biophilic design principles. We integrate ecology, function, and aesthetics to create spaces that feel alive, restorative, and deeply connected to nature.
        </p>

      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-green-50 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold text-green-900">Services</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-green-800">Landscape Architecture</h3>
              <p className="mt-2 text-gray-600">
                Masterplanning, site design, grading, and sustainable outdoor environments.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-green-800">Interior Design</h3>
              <p className="mt-2 text-gray-600">
                Biophilic interior concepts that integrate natural materials and light.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-green-800">Consultancy</h3>
              <p className="mt-2 text-gray-600">
                Design advisory, concept development, and project support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-green-900">
            Selected Projects
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of implemented and consultancy landscape architecture projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* PROJECT 1 - IMPLEMENTED */}
          <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">

            <Image
              src="/images/Karen residential project.jpg"
              alt="Residential Garden Implemented"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Residential Garden (Implemented)
              </p>
            </div>

          </div>

          {/* PROJECT 2 - CONCEPT */}
          <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">

            <Image
              src="/images/sensory-garden.jpg"
              alt="Sensory Garden Concept"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Sensory Garden (Concept Design)
              </p>
            </div>

          </div>

          {/* PROJECT 3 - CONSULTANCY */}
          <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">

            <Image
              src="/images/masterplan.jpg"
              alt="Landscape Masterplan Consultancy"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Landscape Masterplan (Consultancy)
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-green-50 px-6 text-center">

        <h2 className="text-3xl font-semibold text-green-900">Contact</h2>

        <p className="mt-4 text-gray-700">
          Let’s design something meaningful together.
        </p>

        <div className="mt-8">
          <a
            href="mailto:info@bionestspaces.com"
            className="px-6 py-3 bg-green-800 text-white rounded-full"
          >
            Email Us
          </a>
        </div>

      </section>

    </div>
  );
}