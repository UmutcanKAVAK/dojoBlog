
import BlogList from "./BlogList";
import useFetch from "./fetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    err,
  } = useFetch("http://localhost:3001/blogs");

  return (
    <div className="home">
      <h1>All Blogs</h1>
      {err && <div> {err} </div>}
      {isPending && <div>Loading ... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

//!externalizing the logic into its own file we're creating CUSTOM HOOK
