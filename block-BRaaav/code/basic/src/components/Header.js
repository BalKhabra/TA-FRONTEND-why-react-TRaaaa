function Header (){
    return(
        <header class="navbar">
        <div class="container flex">
          <div class="flex">
            <a class="brand" href="title">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul class="flex nav-menu nav-menu-primary">
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="blog">Blog</a>
                </li>
                <li>
                  <a href="work">Our Work</a>
                </li>
                <li>
                  <a href="contracts">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul class="flex nav-menu nav-menu-secondary">
              <li class="social-media-item">
                <a href="facebook"><i class="fab fa-facebook-square"></i></a>
              </li>
              <li class="social-media-item">
                <a href="twitter"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="social-media-item">
                <a href="instagram"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a class="btn btn-primary" href="join"> Sign in / Join </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header;
