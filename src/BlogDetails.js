import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>"{blog.title}"</h1>
          <div>{blog.body}</div>
          <h3>Written by {blog.author}</h3>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
