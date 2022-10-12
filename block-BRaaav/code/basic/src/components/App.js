import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Blogs />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;