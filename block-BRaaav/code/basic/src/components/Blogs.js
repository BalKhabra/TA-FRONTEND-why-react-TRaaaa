import Blog from "./Blog";
import allBlogs from "../data/allBlogs";

function Blogs() {
  return (
    <section className="blog padding">
      <div className="container">
        <header className="sec-header text-center">
          <h2 className="heading">Our Blog</h2>
          <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </header>
        <div className="flex wrap">
          {allBlogs.map((blog, index) => {
            return <Blog key={index} {...blog} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Blogs;