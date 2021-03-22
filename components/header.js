const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            JS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/blog">
                  Blog
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="jumbotron">
          <div id="about" class="card mb-3">
            <div class="row no-gutters">
              <div id="profile-img" class="col-md-6">
                <img src="/images/linkedin_pic.jpeg" alt="profile_pic" />
              </div>
              <div class="col-md-6">
                <div id="about-me-text" class="card-body">
                  <div>
                    <h1 class="card-title">Hey, I'm Josh Seckman</h1>
                    <h3 id="about-me-text" class="card-text">
                      I'm a full-stack developer with a passion for writing
                      clean, efficient code and creating a user-friendly
                      experience
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
