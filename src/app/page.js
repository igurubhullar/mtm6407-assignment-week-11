import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            className="bg-primary hover:bg-blue-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop"
                  alt="Paris, France"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Paris, France</h3>
                <p className="text-gray-600 mb-4">
                  Experience the romance and charm of the City of Light with its
                  iconic landmarks and world-class cuisine.
                </p>
                <Link
                  href="/destinations/europe"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Destination Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1000&auto=format&fit=crop"
                  alt="Tokyo, Japan"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tokyo, Japan</h3>
                <p className="text-gray-600 mb-4">
                  Dive into the perfect blend of ancient traditions and
                  cutting-edge technology in Japan's vibrant capital.
                </p>
                <Link
                  href="/destinations/asia"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Destination Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop"
                  alt="New York, USA"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">New York, USA</h3>
                <p className="text-gray-600 mb-4">
                  Explore the city that never sleeps with its iconic skyline,
                  diverse neighborhoods, and cultural attractions.
                </p>
                <Link
                  href="/destinations/americas"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
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
              <h3 className="text-xl font-bold mb-4">Packing Essentials</h3>
              <p className="text-gray-600 mb-4">
                Learn how to pack efficiently for any type of trip with our
                expert tips and comprehensive checklists.
              </p>
              <Link
                href="/tips"
                className="text-primary font-semibold hover:underline"
              >
                Read more
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Budget Travel Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Discover smart ways to save money while traveling without
                compromising on experiences or comfort.
              </p>
              <Link
                href="/tips/budget"
                className="text-primary font-semibold hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Travel Inspiration</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive travel tips,
            destination guides, and special offers.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <button className="bg-secondary hover:bg-green-600 transition-colors text-white font-bold py-3 px-6 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
