import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <div className="mt-12">
      {" "}
      <section className="team-area">
        <div className="container">
          <div className="team-wrapper">
            <div
              className="team-title section-title"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h1 className="text-center text-[#545454] text-3xl font-semibold">
                Our Creative Team
              </h1>
              <p className="text-center text-xl mt-2 mb-6">
                Tour function information without cross action media value
                <br />
                quickly maximize timely deliverables.
              </p>
            </div>

            <div className="team-content">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="image">
                  <img
                    src="https://i.ibb.co/QnfnVJS/bohemian-man-with-his-arms-crossed-1368-3542.webp"
                    alt="image"
                  />

                  <div className="team-icons flex gap-1 text-white">
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaFacebook />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaTwitter />
                      </span>
                    </Link>
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaInstagram />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaLinkedin />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <h3>Natalia Portman</h3>
                  <p>Founder & CEO</p>
                </div>
              </div>

              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="image">
                  <img
                    src="https://i.ibb.co/0rrtScp/cheerful-curly-business-girl-wearing-glasses-176420-206.jpg"
                    alt="image"
                  />

                  <div className="team-icons flex gap-1 text-white">
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaFacebook />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaTwitter />
                      </span>
                    </Link>
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaInstagram />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaLinkedin />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <h3>Nikita D'suza</h3>
                  <p>Web Desinger</p>
                </div>
              </div>

              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="image">
                  <img
                    src="https://i.ibb.co/SRkp8Dp/ambition-gets-you-far-i-can-testify-that-portrait-confident-mature-businessman-standing-office-with.webp"
                    alt="image"
                  />

                  <div className="team-icons flex gap-1 text-white">
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaFacebook />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaTwitter />
                      </span>
                    </Link>
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaInstagram />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaLinkedin />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <h3>Aliva Dlet</h3>
                  <p>Wordpress Developer</p>
                </div>
              </div>

              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="image">
                  <img
                    src="https://i.ibb.co/2nLN4bh/beautiful-business-woman-with-hijab-portrait-white-background-33799-7103.webp"
                    alt="image"
                    className="w-full"
                  />

                  <div className="team-icons flex gap-1 text-white">
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaFacebook />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaTwitter />
                      </span>
                    </Link>
                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaInstagram />
                      </span>
                    </Link>

                    <Link to="/">
                      <span className="inline-block p-3 text-white rounded-full bg-primary">
                        <FaLinkedin />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <h3>Jenoreva Jissy</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
