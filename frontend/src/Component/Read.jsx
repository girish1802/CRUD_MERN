import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error);
      } else {
        setError("Deleted Successfully");
        setTimeout(() => {
          setError("");
          fetchData();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/alluser");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && (
        <div className="mb-4 p-3 text-white bg-red-500 rounded-lg">{error}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((item) => (
          <div
            key={item._id}
            className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4"
          >
            {/* Card Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h2>

            {/* Card Content */}
            <div className="text-sm text-gray-600">
              <p>Email: {item.email}</p>
              <p>Age: {item.age}</p>
              <p>Description: {item.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 space-y-2 sm:space-y-0">
              {/* Edit Button */}
              <Link
                to={`/update/${item._id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 text-center"
              >
                Edit
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-center"
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
