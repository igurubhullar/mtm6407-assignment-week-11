import Image from "next/image";

export const metadata = {
  title: "About Us | Travel Explorer",
  description: "Learn about the Travel Explorer team and our mission",
};

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Travel Expert",
      bio: "With over 15 years of travel experience across 50+ countries, Sarah founded Travel Explorer to help others discover the world with confidence.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      role: "Travel Photographer",
      bio: "Miguel's award-winning photography has been featured in National Geographic. He specializes in capturing landscapes and cultural moments.",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ling Chen",
      role: "Asia Travel Specialist",
      bio: "Born in Beijing and having lived throughout Asia, Ling provides authentic insights into the diverse cultures and hidden gems of the region.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h1 className="text-3xl font-bold mb-6">About Travel Explorer</h1>
          <div className="relative h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=1200&auto=format&fit=crop"
              alt="Travel Explorer team exploring a destination"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <p className="text-gray-600 mb-4">
            Founded in 2018, Travel Explorer is dedicated to helping travelers
            discover the world's most amazing destinations with confidence and
            ease. We believe that travel is one of life's greatest privileges
            and learning experiences, and we're passionate about making it
            accessible to everyone.
          </p>
          <p className="text-gray-600 mb-4">
            Our team consists of experienced travelers, photographers, and
            regional specialists who have collectively visited over 100
            countries. We combine our firsthand experiences, extensive research,
            and local connections to bring you authentic travel information you
            can trust.
          </p>
          <p className="text-gray-600">
            Whether you're planning your first international trip or you're a
            seasoned globetrotter, our goal is to provide you with the
            inspiration, practical advice, and resources you need to create
            unforgettable travel experiences.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              At Travel Explorer, our mission is threefold:
            </p>
            <ul className="list-disc pl-5 space-y-4 text-gray-600 mb-4">
              <li>
                <span className="font-semibold">Inspire Exploration:</span> To
                showcase the world's diverse cultures, landscapes, and
                experiences in a way that inspires curiosity and a desire to
                explore.
              </li>
              <li>
                <span className="font-semibold">
                  Promote Responsible Travel:
                </span>{" "}
                To encourage travel practices that respect local communities,
                preserve cultural heritage, and protect the environment.
              </li>
              <li>
                <span className="font-semibold">Empower Travelers:</span> To
                provide practical, trustworthy information that helps people
                travel with confidence, regardless of their experience level or
                budget.
              </li>
            </ul>
            <p className="text-gray-600">
              We believe that travel has the power to broaden perspectives,
              foster understanding between cultures, and create meaningful
              connections that last a lifetime.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-primary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We value genuine experiences and strive to provide honest,
                realistic information about destinations. We believe in
                showcasing both the highlights and challenges of travel so you
                can make informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Travel is for everyone. We aim to create content that caters to
                diverse interests, budgets, and abilities, recognizing that each
                traveler's needs and preferences are unique.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote travel practices that minimize environmental impact
                and support local communities. We believe that responsible
                travel is essential for preserving destinations for future
                generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                The world is constantly changing, and so are we. We're committed
                to ongoing research, education, and first-hand exploration to
                keep our content fresh, accurate, and relevant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
