import Link from "next/link";

export default function DestinationsLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-primary">
              Destinations
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-primary transition-colors"
                >
                  All Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/europe"
                  className="hover:text-primary transition-colors"
                >
                  Europe
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/asia"
                  className="hover:text-primary transition-colors"
                >
                  Asia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/americas"
                  className="hover:text-primary transition-colors"
                >
                  Americas
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-3 text-primary">
              Popular Topics
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tips/budget"
                  className="hover:text-primary transition-colors"
                >
                  Budget Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/tips/solo"
                  className="hover:text-primary transition-colors"
                >
                  Solo Travel
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section className="w-full md:w-3/4">{children}</section>
      </div>
    </div>
  );
}
