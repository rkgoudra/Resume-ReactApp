import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">EvilGenius Crafts</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About Me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact Me</span>
          </div>
        </nav>
        {/* nav ends here */}
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello I'm, <span className="name-Im-text">Ramanagouda K S</span>
              </span>
              <span className="Im-text-enthuastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Experienced Frontend Developer. Knack of building back-end
                operations.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire Me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="hero-image"
                src="https://res.cloudinary.com/dlujt4wlv/image/upload/v1649693860/IMG20220228180024_avtrxs.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
