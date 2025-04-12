import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Destinations | Travel Explorer",
  description: "Discover amazing travel destinations around the world",
};

export default function Destinations() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Popular Destinations</h1>
      <p className="text-gray-600 mb-8">
        Explore our carefully curated selection of the world's most remarkable
        destinations. From bustling cities to tranquil beaches, we've got
        something for every type of traveler.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Featured Regions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/destinations/europe" className="block group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=800&auto=format&fit=crop"
                  alt="Map of Europe"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  Europe
                </h3>
                <p className="text-gray-600">
                  Rich history, diverse cultures, and stunning landscapes
                </p>
              </div>
            </div>
          </Link>

          <Link href="/destinations/asia" className="block group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=800&auto=format&fit=crop"
                  alt="Map of Asia"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  Asia
                </h3>
                <p className="text-gray-600">
                  Ancient traditions, modern marvels, and natural wonders
                </p>
              </div>
            </div>
          </Link>

          <Link href="/destinations/americas" className="block group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=800&auto=format&fit=crop"
                  alt="Map of the Americas"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  Americas
                </h3>
                <p className="text-gray-600">
                  Breathtaking natural beauty and vibrant cities
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Top Destinations for 2024
        </h2>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=800&auto=format&fit=crop"
                    alt="Kyoto, Japan"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">Kyoto, Japan</h3>
                <p className="text-gray-600 mb-4">
                  Japan's cultural capital, Kyoto is home to over 1,600 Buddhist
                  temples, 400 Shinto shrines, magnificent palaces, traditional
                  wooden houses, and beautiful gardens. Visit during cherry
                  blossom season (late March to early April) or autumn foliage
                  (November) for breathtaking views.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Cultural
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Historical
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Gardens
                  </span>
                </div>
                <Link
                  href="/destinations/asia"
                  className="text-primary font-semibold hover:underline"
                >
                  Explore more destinations in Asia
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop"
                    alt="Lisbon, Portugal"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">Lisbon, Portugal</h3>
                <p className="text-gray-600 mb-4">
                  Perched on seven hills overlooking the Tagus River, Lisbon
                  captivates with its pastel-colored buildings, narrow
                  cobblestone streets, and vintage trams. Known for its warm
                  climate, delicious cuisine, and vibrant cultural scene,
                  Portugal's capital offers an affordable European experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Food
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Architecture
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Budget-friendly
                  </span>
                </div>
                <Link
                  href="/destinations/europe"
                  className="text-primary font-semibold hover:underline"
                >
                  Explore more destinations in Europe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Travel Planning Resources</h2>
        <p className="mb-4">
          Ready to plan your next adventure? Check out these helpful resources:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <Link href="/tips/budget" className="text-primary hover:underline">
              Budget Travel Guide
            </Link>{" "}
            - Learn how to make the most of your travel budget
          </li>
          <li>
            <Link href="/tips" className="text-primary hover:underline">
              Packing Tips
            </Link>{" "}
            - Essential items for any journey
          </li>
          <li>
            <Link href="/gallery" className="text-primary hover:underline">
              Travel Gallery
            </Link>{" "}
            - Get inspired by stunning photographs
          </li>
        </ul>
      </div>
    </div>
  );
}
