function Hero (){
    return (
        <section class="hero">
        <div class="container flex">
          <div class="flex-48 hero-content">
            <h1 class="hero-heading">
              We make beautiful websites for all people
            </h1>
            <div class="flex justify-start">
              <a class="btn btn-secondary" href="title">Start a project</a>
              <p class="enquiry">
                CALL US (+66) 010-020-0340 <br />
                for any enquiry
              </p>
            </div>
          </div>
          <figure className="flex-48">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/AqcjdkPMPJA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="youtube video"
          ></iframe>
        </figure>
        </div>
      </section>
    )
}
export default Hero;
