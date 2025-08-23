"use client"; 

import { websiteData } from "../websitesData";
import { useRouter } from "next/navigation";

export default function WebsitesPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/"); 
  };

  return (
    <main className="p-6 max-w-6xl mx-auto relative">
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>

      <h1 className="text-3xl font-bold mb-6">Websites Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {websiteData.map((site, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={site.image}
              alt={site.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{site.title}</h2>
            <p className="text-gray-600 mb-2">{site.description}</p>
            <p className="text-sm text-gray-500 mb-2">{site.industry}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {site.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={site.link}
              className="text-blue-600 hover:underline text-sm"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
