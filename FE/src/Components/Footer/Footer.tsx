import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-conference">ICAMM'26</span>
            <span className="footer-institution">PSG College of Technology</span>
          </div>
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/committee" className="footer-link">Committee</a>
            <a href="/speakers" className="footer-link">Speakers</a>
            <a href="/dates" className="footer-link">Dates</a>
            <a href="/details" className="footer-link">Details</a>
            <a href="/registration" className="footer-link">Registration</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ICAMM'26. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
