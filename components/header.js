const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            J
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
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
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <div className="jumbotron">
          <h1 id="name-title">Josh Seckman</h1>
          <div id="about">
            <img src="/images/linkedin_pic.jpeg" />
            <h3>About Me</h3>
            <div>
              <p>I am a dev</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
