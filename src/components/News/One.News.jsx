import React, { useEffect, useState } from "react";
import { getOneNews } from "../../service/api";
import { useParams, useNavigate } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams(); 
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getOneNews(id); 
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        alert("Failed to fetch the news.");
      }
    };

    fetchNews();
  }, [id]);

  if (!news) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-yellow-300 shadow-2xl rounded-lg overflow-hidden">
      <div className="relative h-auto">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white px-4 text-center drop-shadow-lg">
            {news.title}
          </h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          {news.description} 
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
          <span>
            <strong className="text-gray-800">By:</strong>{" "}
            {news.user?.Lastname || "Unknown"} 
          </span>
          <span>
            <strong className="text-gray-800">Published:</strong>{" "}
            {new Date(news.createdAt).toLocaleDateString()} 
          </span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-md"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default NewsDetail;
