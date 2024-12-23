import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const CreateMaqola = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [authorId, setAuthorId] = useState(null); 
  const [error, setError] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      try {
        const decoded = jwtDecode(token); 
        setAuthorId(decoded.userId);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      setError("Title, description, and category are required!");
      return;
    }

    if (!authorId) {
      setError("User not authenticated. Please log in.");
      return;
    }

    try {
      const response = await axios.post(
        "/News",
        {
          title,
          description,
          imageUrl,
          category,
          authorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        }
      );

      if (response.status === 201) {
        setTitle("");
        setdescription("");
        setImageUrl("");
        setCategory("");
        setError("");

        alert("Article created successfully");
      }
    } catch (err) {
      setError("An error occurred while creating the article.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Article</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="description">
            description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="imageUrl">
            Image URL (Optional)
          </label>
          <input
            type="text"
            id="imageUrl"
            className="w-full p-2 border rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Uzb">Uzbek</option>
            <option value="Jxn">Jahon</option>
            <option value="Spt">Sport</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateMaqola;
