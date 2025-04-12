import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Travel Tips | Travel Explorer",
  description: "Expert travel advice and tips for your next adventure",
};

export default function TravelTips() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Essential Travel Tips</h1>
        <p className="text-gray-600 mb-8">
          Our travel experts have compiled these essential tips to help you
          travel smarter, safer, and more enjoyably. Whether you're a seasoned
          traveler or planning your first trip, you'll find valuable advice
          here.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Packing Essentials
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=800&auto=format&fit=crop"
                    alt="Packing a suitcase"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">
                  The Art of Efficient Packing
                </h3>
                <p className="text-gray-600 mb-4">
                  Packing efficiently can make your travel experience much more
                  enjoyable. Here are some key strategies to help you pack like
                  a pro:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>
                    Roll your clothes instead of folding them to save space and
                    reduce wrinkles
                  </li>
                  <li>
                    Use packing cubes to organize your belongings and compress
                    items
                  </li>
                  <li>
                    Pack versatile clothing items that can be mixed and matched
                  </li>
                  <li>
                    Place heavier items at the bottom of your suitcase near the
                    wheels
                  </li>
                  <li>
                    Fill shoes with socks or small items to maximize space
                  </li>
                </ul>
                <p className="text-gray-600">
                  Remember to leave some space for souvenirs you might purchase
                  during your trip!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Essential Travel Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Documents & Essentials</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Passport (with at least 6 months validity)</li>
                  <li>Flight tickets and hotel reservations</li>
                  <li>Travel insurance documents</li>
                  <li>Driver's license and/or international driving permit</li>
                  <li>Credit/debit cards and some local currency</li>
                  <li>Emergency contacts and important phone numbers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Tech & Gadgets</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Smartphone with travel apps installed</li>
                  <li>Camera and memory cards</li>
                  <li>Universal power adapter</li>
                  <li>Portable charger/power bank</li>
                  <li>Headphones</li>
                  <li>E-reader or tablet for entertainment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Safety & Health Tips
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">
              Staying Safe While Traveling
            </h3>
            <p className="text-gray-600 mb-4">
              Safety should always be a priority when traveling. Here are some
              important safety tips:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                Research your destination before traveling to understand local
                customs, laws, and potential risks
              </li>
              <li>Share your itinerary with family or friends back home</li>
              <li>Keep digital and physical copies of important documents</li>
              <li>Be aware of common scams in your destination</li>
              <li>Use hotel safes for valuables when available</li>
              <li>
                Stay alert in crowded areas and keep an eye on your belongings
              </li>
              <li>
                Purchase comprehensive travel insurance that covers medical
                emergencies
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">
              Staying Healthy During Travel
            </h3>
            <p className="text-gray-600 mb-4">
              Maintaining your health while traveling will ensure you enjoy your
              trip to the fullest:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                Pack a basic first-aid kit with bandages, pain relievers, and
                any personal medications
              </li>
              <li>
                Research what vaccinations might be needed for your destination
              </li>
              <li>
                Stay hydrated, especially during flights and in hot climates
              </li>
              <li>
                Be cautious with street food and water sources in some
                destinations
              </li>
              <li>
                Maintain good hygiene practices, particularly hand washing
              </li>
              <li>
                Allow time to adjust to new time zones to minimize jet lag
              </li>
              <li>
                Protect yourself from the sun with sunscreen, a hat, and
                sunglasses
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Travel Smart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/tips/budget"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">
                Budget Travel Strategies
              </h3>
              <p className="text-gray-600">
                Learn how to make the most of your travel budget with smart
                planning, timing, and money-saving tips for accommodations,
                transportation, and activities.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">
                Read more →
              </span>
            </Link>

            <Link
              href="/tips/solo"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">Solo Travel Guide</h3>
              <p className="text-gray-600">
                Discover the joys and challenges of traveling alone, with
                practical advice for staying safe, meeting people, and making
                the most of your solo adventures.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">
                Read more →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
