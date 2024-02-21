import React from "react";
import profileimagedemo from "../../Resources/Assets/profiledemo.avif";
import { profiles } from "../../Data/Data";


function ProfileComponent() {
  return (
    <div className="">
      {profiles.map(profile => (
        <div key={profile.id} className=" w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Left side: Profile picture and name */}
            <div className="md:w-1/3 bg-gray-200 p-8 flex flex-col items-center justify-center">
              <div className="w-50 h-50 bg-gray-300 rounded-full overflow-hidden mb-4 max-h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={profile.profileImage}
                  alt="Profile"
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{profile.name}</h2>
                <p className="text-gray-600">{profile.designation}</p>
              </div>
            </div>
            {/* Right side: Additional details */}
            <div className="md:w-2/3 p-8" >
              <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="text-lg font-medium">About Me</h4>
                  <p className="text-gray-600">{profile.aboutMe}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Experience</h4>
                  <p className="text-gray-600">{profile.experience}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Skills</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {profile.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileComponent;
