import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);

  // Fetch profiles from an API (mocked here)
  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch("http://localhost:5000/api/profiles"); // Replace with your API URL
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;
