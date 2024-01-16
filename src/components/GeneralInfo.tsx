import React, { useState } from "react";

interface GeneralInfoProps {
  // Add any props if needed
}

const GeneralInfo: React.FC<GeneralInfoProps> = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // Handle form submission logic here
  };

  return (
    <div className="general-info bg-gray-200 p-4 my-4">
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          <label className="block">
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          <label className="block">
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="text-xl font-bold">Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button
            onClick={handleEdit}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
