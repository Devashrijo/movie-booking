import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="certification">
            <img src="/images/verified-logo1.png" alt="Panacea InfoSec" />
            <img src="/images/verified-logo2.png" alt="Norton Secured" />
          </div>
          <div className="social-icons">
            <a href="#">
              <img src="/images/facebook.jpg" alt="logo" />
            </a>
            <a href="#">
              <img src="/images/instagram.png" alt="logo" />
            </a>
            <a href="#">
              <img src="/images/xstream.png" alt="logo" />
            </a>
            <a href="#">
              <img src="/images/youtube.jpg" alt="logo" />
            </a>
            <a href="#">
              <img src="/images/linkedIn.png" alt="logo" />
            </a>
          </div>
          <div className="app-links">
            <a href="#">
              <img src="/images/googleplaybutton.png" alt="Google Play" />
            </a>
            <a href="#">
              <img src="/images/appleplaybutton.png" alt="App Store" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Terms of Use</a>
            <a href="#">Customer Experience</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
