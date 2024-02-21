import React from 'react';
import { experiences } from '../../Data/Data';

function ExperienceDetailsComponent() {
  return (
    <div className="">
      {experiences.map((experience, index) => (
        <div key={index} className="w-full bg-white shadow-md rounded-lg overflow-hidden max-h-[300px] mb-4">
          <div className="md:flex">
            {/* Experience Details */}
            <div className="md:w-full p-8">
              <h3 className="text-xl font-semibold mb-4">Experience Details</h3>
              {/* Company, Position, and Duration */}
              <div className="flex flex-col md:flex-row md:space-x-8 mb-4">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-medium">Company</h4>
                  <p className="text-gray-600">{experience.company}</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-medium">Position</h4>
                  <p className="text-gray-600">{experience.position}</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-medium">Duration</h4>
                  <p className="text-gray-600">{experience.duration}</p>
                </div>
              </div>
              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-medium">Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceDetailsComponent;
