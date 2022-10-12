import ProgressItem from "./ProgressItem";
import skills from './data/skills'
function About (){
    return(
        <section class="about padding">
        <div class="container flex align-start">
          <div class="flex-40">
            <header class="sec-header">
              <h2 class="heading">Let us introduce</h2>
              <div class="dot-wrapper flex justify-start">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </header>

            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique ut sequi voluptatibus beatae corporis repellat
              asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
              illum, recusandae nisi neque iusto culpa!
            </p>
            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-30 progress">
          {skills.map((skill, index) => {
            return <ProgressItem key={index} {...skill} />;
          })}
        </div>
        <div className="flex-30">
          <img
            className="flexible-img about-img"
            src="assets/media/about-image.jpg"
            alt=""
          />
        </div>
      </div>
      </section>
    )
}

export default About;

