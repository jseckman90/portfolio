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
          <section id="about">
            <img src="/images/linkedin_pic.jpeg" />
            <h3>About Me</h3>
            <div>
              <p>I am a dev</p>
            </div>
          </section>

          <hr />

          <section id="skills">
            <h3>Skills</h3>
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
                <img src="https://img.icons8.com/color/72/000000/ruby-programming-language.png" />
                <p>Ruby</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/react-native.png" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/nodejs.png" />
                <p>Node.js</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/git.png" />
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
                <img src="https://img.icons8.com/wired/72/000000/postman-api.png" />
                <p>Postman</p>
              </div>
            </div>
          </section>

          <hr />

          <section id="projects">
            <h3>Projects</h3>
            <div className="project-container">
              <div class="card mb-3" style={{ "max-width": "540px;" }}>
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/marvel_studios_movie_hub.png"
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
                      <div>
                        <img src="https://img.icons8.com/color/72/000000/html-5.png" />
                        <img src="https://img.icons8.com/color/72/000000/css3.png" />
                        <img src="https://img.icons8.com/color/72/000000/javascript.png" />
                      </div>
                      <hr />
                      <div>
                        <i class="fab fa-github"></i>
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

              <div class="card mb-3" style={{ "max-width": "540px;" }}>
                <div class="row no-gutters">
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
                      <div>
                        <img src="https://img.icons8.com/color/72/000000/html-5.png" />
                        <img src="https://img.icons8.com/color/72/000000/css3.png" />
                        <img src="https://img.icons8.com/color/72/000000/javascript.png" />
                      </div>
                      <hr />
                      <div>
                        <i class="fab fa-github"></i>
                        <a
                          href="https://jszenproject2.herokuapp.com/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img
                      src="/images/my_pantry.png"
                      class="card-img"
                      alt="Marvel Studios Movie Hub"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <h3>Contact</h3>
            <div>Linkedin, Github, Email</div>
          </section>
        </main>
      </div>
      <MDList posts={allMD} />
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
