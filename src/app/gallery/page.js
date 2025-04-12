import Image from "next/image";

export const metadata = {
  title: "Travel Gallery | Travel Explorer",
  description: "Beautiful travel photography from around the world",
};

export default function Gallery() {
  // Gallery data with real travel destinations
  const galleryItems = [
    {
      id: 1,
      location: "Santorini, Greece",
      description:
        "White-washed buildings with blue domes overlooking the Aegean Sea",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
      category: "Europe",
    },
    {
      id: 2,
      location: "Kyoto, Japan",
      description: "Beautiful autumn colors at the Arashiyama Bamboo Grove",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
      category: "Asia",
    },
    {
      id: 3,
      location: "Grand Canyon, USA",
      description: "Stunning view of the Grand Canyon at sunset",
      image:
        "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=800&auto=format&fit=crop",
      category: "Americas",
    },
    {
      id: 4,
      location: "Bali, Indonesia",
      description:
        "Rice terraces in Tegallalang with palm trees and traditional architecture",
      image:
        "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=800&auto=format&fit=crop",
      category: "Asia",
    },
    {
      id: 5,
      location: "Venice, Italy",
      description: "Colorful buildings along the historic canals of Venice",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
      category: "Europe",
    },
    {
      id: 6,
      location: "Machu Picchu, Peru",
      description:
        "Ancient Incan citadel set against a backdrop of stunning mountains",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop",
      category: "Americas",
    },
    {
      id: 7,
      location: "Great Barrier Reef, Australia",
      description: "Vibrant coral reef and diverse marine life underwater",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      category: "Oceania",
    },
    {
      id: 8,
      location: "Marrakech, Morocco",
      description: "Colorful spice market in the historic Medina quarter",
      image:
        "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=800&auto=format&fit=crop",
      category: "Africa",
    },
    {
      id: 9,
      location: "Swiss Alps, Switzerland",
      description: "Snow-capped mountains with traditional Alpine village",
      image:
        "https://images.unsplash.com/photo-1508182314998-3bd49473002f?q=80&w=800&auto=format&fit=crop",
      category: "Europe",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Travel Gallery</h1>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Explore our collection of stunning travel photography from around the
        world. These images capture the beauty and diversity of our planet's
        landscapes, cultures, and architecture.
      </p>

      {/* Filter badges */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
          All
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-full text-sm font-medium">
          Europe
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-full text-sm font-medium">
          Asia
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-full text-sm font-medium">
          Americas
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-full text-sm font-medium">
          Africa
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-full text-sm font-medium">
          Oceania
        </button>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-72">
              <Image
                src={item.image}
                alt={`${item.location} - ${item.description}`}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">{item.location}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
              <span className="inline-block mt-2 text-xs bg-primary/80 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Inspired by these images? Start planning your next adventure today!
        </p>
        <a
          href="/destinations"
          className="inline-block bg-primary hover:bg-blue-600 transition-colors text-white font-bold py-3 px-8 rounded-full"
        >
          Explore Destinations
        </a>
      </div>
    </div>
  );
}
