function Blog(props) {
    return (
      <article className="flex article flex-48">
        <div className="flex-40 font-0">
          <img className="flexible-img" src={props.imgSrc} alt="" />
        </div>
  
        <div className="flex-60 article-content">
          <time dateTime="">
            <i className="far fa-clock"></i>
            {props.date}
          </time>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a className="btn btn-tertiary" href="_a#">
            Read Article
          </a>
        </div>
      </article>
    );
  }
  
  export default Blog;