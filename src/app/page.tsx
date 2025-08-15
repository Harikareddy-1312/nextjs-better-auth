import React from "react";
import Image from "next/image";
import { websiteData } from "./websitesData";
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Websites</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {websiteData.map((site, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={site.image}
                alt={site.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{site.title}</h2>
            <p className="text-gray-600 mb-3">{site.description}</p>
            <div className="flex flex-wrap gap-2">
              {site.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">{site.industry}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
