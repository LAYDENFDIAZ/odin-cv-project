import React, { useState } from "react";

interface EducationProps {
  // Add any props if needed
}

interface Study {
  id: number;
  school: string;
  title: string;
  date: string;
}

const Education: React.FC<EducationProps> = () => {
  const [editMode, setEditMode] = useState(false);
  const [studies, setStudies] = useState<Study[]>([]);
  const [newStudy, setNewStudy] = useState<Study>({
    id: Date.now(),
    school: "",
    title: "",
    date: "",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    setStudies((prevStudies) => [...prevStudies, newStudy]);
    setNewStudy({
      id: Date.now(),
      school: "",
      title: "",
      date: "",
    });
  };

  const handleDelete = (id: number) => {
    setStudies((prevStudies) => prevStudies.filter((study) => study.id !== id));
  };

  return (
    <div className="education bg-gray-200 p-4 my-4">
      <h2 className="text-xl font-bold mb-2">Educational Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            School:
            <input
              type="text"
              value={newStudy.school}
              onChange={(e) =>
                setNewStudy({ ...newStudy, school: e.target.value })
              }
              className="border border-gray-300 p-2 w-full"
              required
            />
          </label>
          <label className="block">
            Title of Study:
            <input
              type="text"
              value={newStudy.title}
              onChange={(e) =>
                setNewStudy({ ...newStudy, title: e.target.value })
              }
              className="border border-gray-300 p-2 w-full"
              required
            />
          </label>
          <label className="block">
            Date of Study:
            <input
              type="date"
              value={newStudy.date}
              onChange={(e) =>
                setNewStudy({ ...newStudy, date: e.target.value })
              }
              className="border border-gray-300 p-2"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Study
          </button>
        </form>
      ) : (
        <div>
          {studies.map((study) => (
            <div key={study.id} className="mb-4">
              <p className="text-lg font-bold">
                {study.school} - {study.title}
              </p>
              <p>Date of Study: {study.date}</p>
              <button
                onClick={() => handleDelete(study.id)}
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
            Add Educational Experience
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
