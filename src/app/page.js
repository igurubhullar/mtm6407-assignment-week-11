import Image from "next/image";
import Link from "next/link";

function DestinationCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-zinc-700 font-extrabold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
            alt="Beautiful travel destination"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the World's Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore amazing destinations and create unforgettable memories
          </p>
          <Link
            href="/destinations"
            className="bg-secondary hover:bg-blue-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-zinc-900 font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DestinationCard
              image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop"
              title="Paris, France"
              description="Experience the romance and charm of the City of Light with its iconic landmarks and world-class cuisine."
            />
            <DestinationCard
              image="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1000&auto=format&fit=crop"
              title="Tokyo, Japan"
              description="Dive into the perfect blend of ancient traditions and cutting-edge technology in Japan's vibrant capital."
            />
            <DestinationCard
              image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop"
              title="New York, USA"
              description="Explore the city that never sleeps with its iconic skyline, diverse neighborhoods, and cultural attractions."
            />
          </div>
        </div>
      </section>

      {/* Travel Tips Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Travel Tips & Advice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl text-zinc-700 font-extrabold mb-4">
                Packing Essentials
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to pack efficiently for any type of trip with our
                expert tips and comprehensive checklists.
              </p>
              <Link
                href="/tips"
                className="text-zinc-500 font-semibold hover:underline"
              >
                Read more
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl text-zinc-700 font-extrabold mb-4">
                Budget Travel Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Discover smart ways to save money while traveling without
                compromising on experiences or comfort.
              </p>
              <Link
                href="/tips"
                className="text-zinc-500 font-semibold hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
