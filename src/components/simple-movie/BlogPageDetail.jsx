import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetail = () => {
  const { slug } = useParams();
  // fecth.com?slug=hello-world

  const navigate = useNavigate();
  return (
    <div>
      Details
      <button
        className="p-3 text-white bg-blue-500 rounded-lg"
        onClick={() => navigate("/blog")}
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetail;
