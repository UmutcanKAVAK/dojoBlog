import { useParams } from "react-router-dom";
import useFetch from "./fetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    err,
    isPending,
  } = useFetch("http://localhost:3001/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:3001/blogs/" + blog.id , {
        method: "DELETE"
    }).then(() => {
        navigate("/");
    });
  }
const navigate = useNavigate();
  return (
    <div className="blog-details">
      {isPending && <div>Loading</div>}
      {isPending && <div>{err}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <br />
          <p>{blog.body}</p>
          <br />
          <p>Written By {blog.author}</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
