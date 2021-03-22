import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import MDList from "../components/MDList";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Index = ({ allMD }) => {
  return (
    <Layout>
      <div className="container">
        <main>
          <section id="skills">
            <h3 className="title">SKILLS</h3>
            <div className="skills-container">
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/html-5.png" />
                <p>HTML 5</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/css3.png" />
                <p>CSS 3</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/javascript.png" />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/ios-filled/72/000000/jquery.png" />
                <p>jQuery</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/ruby-programming-language.png" />
                <p>Ruby</p>
              </div>
              <div className="skill">
                <i class="devicon-rails-plain-wordmark colored"></i>
                <p>Rails</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/react-native.png" />
                <p>React</p>
              </div>
              <div className="skill">
                <i class="devicon-nodejs-plain colored"></i>

                <p>Node.js</p>
              </div>
              <div className="skill">
                <i class="devicon-git-plain-wordmark colored"></i>
                <p>git</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/mongodb.png" />
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/postgreesql.png" />
                <p>PostgreSQL</p>
              </div>
              <div className="skill">
                <i class="devicon-express-original colored"></i>
                <p>Express</p>
              </div>
            </div>
          </section>

          <hr />

          <section id="projects">
            <h3 className="title">PROJECTS</h3>
            <div className="project-container">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/msmh_app.png"
                      class="card-img"
                      alt="Marvel Studios Movie Hub"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Marvel Studios Movie Hub</h3>
                        <p class="card-text">
                          Jump in and learn about the Marvel Cinematic Universe
                          films{" "}
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png" />
                          <p>HTML 5</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/ios-filled/60/000000/jquery.png" />
                          <p>jQuery</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/jseckman90/Marvel-Studios-Movie-Hub"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://marvelstudiosmoviehub-orcin.vercel.app/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/my_pantry_app.png"
                      class="card-img"
                      alt="MyPantry"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">MyPantry</h3>
                        <p class="card-text">
                          Inventory your grocery items in your home and generate
                          a grocery list
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png" />
                          <p>HTML 5</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="skill">
                          <i class="devicon-express-original colored"></i>
                          <p>Express</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
                          <p>MongoDB</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/jseckman90/MyPantry"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://jszenproject2.herokuapp.com/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/halloweenpicks.png"
                      class="card-img"
                      alt="StudioSixTwo"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Halloween Picks</h3>
                        <p class="card-text">
                          Halloween Pick is an app made to make family (or
                          friend or date!) nights easier to plan and therefor
                          enjoy. The app picks three major picks for your night:
                          your cocktail, your snacks, and your movie. This way
                          you spend less time discussing what everyone wants,
                          and more time enjoying each other's company.
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/react-native.png" />
                          <p>React</p>
                        </div>
                        <div className="skill">
                          <i class="devicon-express-original colored"></i>
                          <p>Express</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
                          <p>MongoDB</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/caitmp12/zen-project3-frontend"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://eloquent-newton-3f7527.netlify.app/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/studiosixtwo.png"
                      class="card-img"
                      alt="StudioSixTwo"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Studio SixTwo</h3>
                        <p class="card-text">A simple E-Commerce Store</p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/react-native.png" />
                          <p>React</p>
                        </div>

                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/ruby-programming-language.png" />
                          <p>Ruby</p>
                        </div>
                        <div className="skill">
                          <i class="devicon-rails-plain-wordmark colored"></i>
                          <p>Rails</p>
                        </div>
                        <div className="skill">
                          <img src="https://img.icons8.com/color/60/000000/postgreesql.png" />
                          <p>PostgreSQL</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/jseckman90/shop_frontend"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://silly-wilson-57fd79.netlify.app/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <h3 className="title">CONTACT</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/joshseckman/"
                target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/jseckman90" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <div
                style={{
                  fontSize: "0.85rem",
                }}>
                <i class="far fa-envelope">: </i>
                <h5>jseckman90@gmail.com</h5>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const allMD = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../markdown", true, /\.md$/));

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      allMD,
    },
  };
}
