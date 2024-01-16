import React, { useState } from "react";

interface ExperienceProps {
  // Add any props if needed
}

interface Job {
  id: number;
  company: string;
  position: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  const [editMode, setEditMode] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState<Job>({
    id: Date.now(),
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setNewJob({
      id: Date.now(),
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDelete = (id: number) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="experience bg-gray-200 p-4 my-4">
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Company:
            <input
              type="text"
              value={newJob.company}
              onChange={(e) =>
                setNewJob({ ...newJob, company: e.target.value })
              }
              className="border border-gray-300 p-2 w-full"
              required
            />
          </label>
          <label className="block">
            Position:
            <input
              type="text"
              value={newJob.position}
              onChange={(e) =>
                setNewJob({ ...newJob, position: e.target.value })
              }
              className="border border-gray-300 p-2 w-full"
              required
            />
          </label>
          <label className="block">
            Responsibilities:
            <textarea
              value={newJob.responsibilities}
              onChange={(e) =>
                setNewJob({ ...newJob, responsibilities: e.target.value })
              }
              className="border border-gray-300 p-2 w-full h-24"
              required
            />
          </label>
          <label className="block">
            Start Date:
            <input
              type="date"
              value={newJob.startDate}
              onChange={(e) =>
                setNewJob({ ...newJob, startDate: e.target.value })
              }
              className="border border-gray-300 p-2"
              required
            />
          </label>
          <label className="block">
            End Date:
            <input
              type="date"
              value={newJob.endDate}
              onChange={(e) =>
                setNewJob({ ...newJob, endDate: e.target.value })
              }
              className="border border-gray-300 p-2"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Job
          </button>
        </form>
      ) : (
        <div>
          {jobs.map((job) => (
            <div key={job.id} className="mb-4">
              <p className="text-lg font-bold">
                {job.company} - {job.position}
              </p>
              <p>Responsibilities: {job.responsibilities}</p>
              <p>Start Date: {job.startDate}</p>
              {job.endDate && <p>End Date: {job.endDate}</p>}
              <button
                onClick={() => handleDelete(job.id)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Add Work Experience
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
