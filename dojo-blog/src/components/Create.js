import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Super Saiyan Umut");
    const [isPending,setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); //if you don't put this the form is gonna refresh itself
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true)
    fetch("  http://localhost:3001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //!the type of content we're sending is json
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      setIsPending(false)
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog.</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

       {!isPending &&  <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
      {title}
      {body}
      {author}
    </div>
  );
};

export default Create;
