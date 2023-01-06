import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <!-- header --> */}
      <header class="header">
        <div class="header__wrapper">
          <button class="header__hamburger-btn">
            <img
              src="img/svg/hamburger.svg"
              alt="Hamburger"
              class="header__hamburger-icon"
            />
          </button>
          <a href="index.html" class="header__link" rel="noopener noreferrer">
            <img
              src="img/tongueDRUMS.svg"
              alt="tongueDRUMS"
              class="header__logo"
            />
          </a>
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__list-el">
                <a
                  href="index.html"
                  rel="noopener noreferrer"
                  class="header__list-link"
                >
                  Home
                </a>
              </li>
              <li class="header__list-el">
                <a
                  href="#products"
                  rel="noopener noreferrer"
                  class="header__list-link"
                >
                  Products
                </a>
              </li>
              <li class="header__list-el">
                <a
                  href="#contact"
                  rel="noopener noreferrer"
                  class="header__list-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav class="nav">
          <button class="nav__btn-close">
            <img
              src="img/svg/close.svg"
              alt="Cancel"
              class="nav__btn-close-icon"
            />
          </button>
          <img
            src="img/nav_mobile_small.png"
            data-src="img/nav_mobile_large.png"
            alt="TongueDRUMS nav"
            class="nav__image filter"
          />
          <ul class="nav__list">
            <li class="nav__list-el">
              <a href="index.html" class="nav__link" rel="noopener noreferrer">
                <img src="img/svg/home.svg" alt="Home" class="nav__icon" />
                <p class="nav__text">Home</p>
              </a>
            </li>
            <li class="nav__list-el">
              <a href="#products" class="nav__link" rel="noopener noreferrer">
                <img src="img/svg/info.svg" alt="Products" class="nav__icon" />
                <p class="nav__text">Products</p>
              </a>
            </li>
            <li class="nav__list-el">
              <a href="#contact" class="nav__link" rel="noopener noreferrer">
                <img
                  src="img/svg/contact.svg"
                  alt="Contact"
                  class="nav__icon"
                />
                <p class="nav__text">Contact</p>
              </a>
            </li>
            <li class="nav__list-el">
              <p class="nav__text nav__text--special">Information</p>
            </li>
            <li class="nav__list-el">
              <a
                href="terms-and-conditions.html"
                class="nav__link"
                rel="noopener noreferrer"
              >
                <img
                  src="img/svg/terms-and-conditions.svg"
                  alt="Terms and Conditions"
                  class="nav__icon"
                />
                <p class="nav__text">Terms and Conditions</p>
              </a>
            </li>
            <li class="nav__list-el">
              <a
                href="privacy-policy.html"
                class="nav__link"
                rel="noopener noreferrer"
              >
                <img
                  src="img/svg/privacy-policy.svg"
                  alt="Privacy Policy"
                  class="nav__icon"
                />
                <p class="nav__text">Privacy Policy</p>
              </a>
            </li>
            <li class="nav__list-el">
              <a href="return.html" class="nav__link" rel="noopener noreferrer">
                <img
                  src="img/svg/return.svg"
                  alt="Return and Complaint"
                  class="nav__icon"
                />
                <p class="nav__text">Return and Complaint</p>
              </a>
            </li>
          </ul>
        </nav>
        <div class="nav__backdrop"></div>
      </header>

      {/* <!-- billboard --> */}
      <a
        href="https://github.com/kamilMalinowski/vanillajs-tongue-drums-shop"
        target="_blank"
        rel="noopener noreferrer"
        class="billboard"
      >
        <img
          src="img/billboard_mobile_large.png"
          alt="About TongueDRUMS"
          class="billboard__image billboard__image--mobile"
        />
        <img
          src="img/billboard_desktop_large.png"
          alt="About TongueDRUMS"
          class="billboard__image billboard__image--desktop"
        />
      </a>

      {/* <!-- main home --> */}
      <main class="main main--home">
        <section class="home">
          <div class="home__content">
            <h2 class="home__title">Unique self-made drums.</h2>
            <p class="home__description">
              Drumming never sounded so good. Tongue drum is a great alternative
              to the everyday drum kit and can be used in many different genres
              of music.
            </p>
            <a href="#products" class="home__link">
              Explore
            </a>
          </div>
          <img src="img/home_large.png" alt="Home" class="home__image" />
        </section>

        <section class="home__section" id="products">
          <h2>Featured</h2>
          <ul class="home-list">
            <li>
              <a
                href="tongue-drum.html"
                class="home-list__link"
                rel="noopener noreferrer"
              >
                <span class="home-list__box">
                  <img
                    src="img/list-1_large.png"
                    alt="Product"
                    class="home-list__image"
                  />
                </span>
                <span class="home-list__title">Tongue drum</span>
                <span class="home-list__price">96.98 €</span>
              </a>
            </li>
            <li>
              <a
                href="djembe-drum.html"
                class="home-list__link unavailable"
                rel="noopener noreferrer"
              >
                <span class="home-list__box">
                  <img
                    src="img/list-2_large.png"
                    alt="Product"
                    class="home-list__image"
                  />
                </span>
                <span class="home-list__title">
                  Djembe - <i>sold out</i>
                </span>
                <span class="home-list__price">106.98 €</span>
              </a>
            </li>
            <li>
              <a
                href="handpad-drum.html"
                class="home-list__link unavailable"
                rel="noopener noreferrer"
              >
                <span class="home-list__box">
                  <img
                    src="img/list-3_large.png"
                    alt="Product"
                    class="home-list__image"
                  />
                </span>
                <span class="home-list__title">
                  Handpan drum - <i>sold out</i>
                </span>
                <span class="home-list__price">116.98 €</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* <!-- footer --> */}
      <footer class="footer" id="contact">
        <div class="footer__wrapper">
          <div class="about-us">
            <section class="about-us__heading">
              <img
                src="img/about-us_small.png"
                data-src="img/about-us_large.png"
                alt="Product"
                class="about-us__image filter filter--circle"
              />
              <h3 class="about-us__title">
                Hi! We are <span class="primary">Tongue</span>
                <span class="secondary">DRUMS</span>
              </h3>
            </section>
            <section class="about-us__content">
              <h4 class="about-us__sub-title">
                We have the best musical instruments for sale. We are the place
                to go if you want quality musical instruments without having to
                leave home. Click here to find out more about our selection of
                products!
              </h4>
              <p class="about-us__description">
                Explore the world of music with us!
              </p>
              <h5 class="about-us__sub-title">Follow us:</h5>
              <ul class="about-us__list">
                <li class="about-us__list-el">
                  <a
                    href="https://www.facebook.com/"
                    rel="noopener noreferrer"
                    class="about-us__link"
                  >
                    <img
                      src="img/svg/facebook.svg"
                      alt="Facebook"
                      class="about-us__icon about-us__icon--facebook"
                    />
                  </a>
                </li>
                <li class="about-us__list-el">
                  <a
                    href="https://www.instagram.com/"
                    rel="noopener noreferrer"
                    class="about-us__link"
                  >
                    <img
                      src="img/svg/instagram.svg"
                      alt="Instagram"
                      class="about-us__icon about-us__icon--instagram"
                    />
                  </a>
                </li>
                <li class="about-us__list-el">
                  <a
                    href="https://www.youtube.com/"
                    rel="noopener noreferrer"
                    class="about-us__link"
                  >
                    <img
                      src="img/svg/youtube.svg"
                      alt="Youtube"
                      class="about-us__icon about-us__icon--youtube"
                    />
                  </a>
                </li>
                <li class="about-us__list-el">
                  <a
                    href="https://twitter.com/"
                    rel="noopener noreferrer"
                    class="about-us__link"
                  >
                    <img
                      src="img/svg/twitter.svg"
                      alt="Twitter"
                      class="about-us__icon about-us__icon--twitter"
                    />
                  </a>
                </li>
                <li class="about-us__list-el">
                  <a
                    href="https://pinterest.com/"
                    rel="noopener noreferrer"
                    class="about-us__link"
                  >
                    <img
                      src="img/svg/pinterest.svg"
                      alt="Pinterest"
                      class="about-us__icon about-us__icon--pinterest"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <ul class="footer__list">
            <li class="footer__list-el">
              <p class="footer__text">tongueDRUMS EN 2022</p>
            </li>
            <li class="footer__list-el">
              <a
                href="privacy-policy.html"
                rel="noopener noreferrer"
                class="footer__link"
              >
                privacy policy
              </a>
            </li>
            <li class="footer__list-el">
              <a
                href="terms-and-conditions.html"
                rel="noopener noreferrer"
                class="footer__link"
              >
                terms and conditions
              </a>
            </li>
            <li class="footer__list-el">
              <a
                href="return.html"
                rel="noopener noreferrer"
                class="footer__link"
              >
                replacement, return and claim
              </a>
            </li>
            <li class="footer__list-el">
              <a
                href="contact-us.html"
                rel="noopener noreferrer"
                class="footer__link"
              >
                contact us
              </a>
            </li>
            <li class="footer__list-el">
              <a
                href="https://www.kamil--m.com/home/"
                rel="noopener noreferrer"
                target="_blank"
                class="footer__link footer__link--special"
              >
                powered by kamil malinowski
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* <!-- cookies --> */}
      <div class="cookies">
        <div class="cookies__wrapper">
          <img src="img/svg/cookies.svg" alt="Cookies" class="cookies__icon" />
          <section class="cookies__section">
            <h4 class="cookies__title">We use cookies</h4>
            <p class="cookies__description">
              Cookies help us deliver the best experience on our website. By
              using our website, you agree to the use of cookies.
              <a
                href="privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                class="cookies__link"
              >
                Find out how we use cookies.
              </a>
            </p>
            <div class="cookies__buttons">
              <button
                data-atribute="accepted"
                class="cookies__btn cookies__btn--special"
              >
                accept all
              </button>
              <button data-atribute="declined" class="cookies__btn">
                decline
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
