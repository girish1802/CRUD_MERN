import React from "react";
import logo from "../images/profil.jpg";

export default function ProfileCard() {
  const data = [
    {
      id: 1,
      img: logo,
      name: "Girish",
      description: "A creative software developer.",
    },
    {
      id: 2,
      img: logo,
      name: "Rahul",
      description: "Focused on building scalable solutions.",
    },
    {
      id: 3,
      img: logo,
      name: "Dhiraj",
      description: "A passionate full-stack developer.",
    },
  ];

  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-red-400 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="w-24 h-24 mb-4">
              <img
                src={item.img}
                alt={`${item.name}'s profile`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Profile Details */}
            <div className="text-center mb-4">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                className="bg-red-200 text-red-700 px-3 py-1 rounded hover:bg-red-300"
                onClick={() => alert(`Editing ${item.name}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-800"
                onClick={() => alert(`Deleting ${item.name}`)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
