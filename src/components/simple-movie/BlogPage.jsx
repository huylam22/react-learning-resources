import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // lay gia tri e.g localhost:3030/blog?search=hello
  console.log(searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "huy" });
  }, []);
  return <div>Blog Page</div>;
};

export default BlogPage;
