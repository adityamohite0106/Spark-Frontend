import { useNavigate } from "react-router-dom";
import "../Pages/Entrypage.css";
import "/src/Mobile/MobileEntyPage.css"

function Entrypage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <span>
            <img src="/Images/Group.png" alt="logopng" />
          </span>
         <span className="entry-title">SPARK™|</span>  <span className="marketplace">Marketplace</span>
        </div>
        <button className="signup-btn" onClick={() => navigate("/signup")}>
      Sign up free
    </button>

      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            The easiest place to <br /> update and share your{" "}
            <span>Connection</span>
          </h1>
          <p>
            Help your followers discover everything you’re sharing all over the
            internet, in one simple place.
          </p>
          <button className="cta-btn" onClick={() => navigate("/signup")}>Get your free Spark</button>
        </div>

        {/* Right Image */}
        <div className="hero-img">
          <img src="/Images/Analytics 1.png" alt="Analytics" />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics">
        <div className="analytics-img">
          <img src="/Images/Analytics 2.png" alt="Analytics" />
        </div>
        <div className="analytics-card">
          <h3>Analyze your audience and keep your followers engaged</h3>
          <p>
            Track your engagement over time, monitor revenue and learn what's
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <div className="content-text">
          <h2>Share limitless content in limitless ways</h2>
          <p>
            Connect your content in all its forms and help followers find more
            of what they're looking for. Your TikToks, Tweets, YouTube videos,
            music, articles, recipes, podcasts, and more... It all comes
            together in one powerful place.
          </p>
        </div>
        <div className="content-card">
          <img src="/Images/contentimg.png" alt="Contentimg" />
        </div>
      </section>

      {/* Media and Content Section */}
      <section className="review">
        <div className="review-content">
          <h1>
            Here's what our <span style={{ color: "#28a745" }}>customer</span>{" "}
            <br /> has to says
          </h1>
          <button className="review-btn" onClick={() => navigate("/signup")}>Read Customers stories</button>
        </div>
        <div className="review-card1">
          Your reviews are valuable for us!
          <br />
          <span style={{ color: "green" }}>– Spark</span>
        </div>
      </section>

      {/* Review Section */}
      <div className="review-section">
        <div className="review-card" style={{ backgroundColor: "#f5f5f5" }}>
          <p className="testimonial">Amazing tool! Saved me months</p>
          <p className="placeholder">
            "Incredible experience! I’ve never seen anything like it. This app
            makes everything so much easier, I couldn’t be happier with it!"
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">John Master</p>
              <p className="author-title">Director, Spark.com</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p className="testimonial">Incredible service! Highly recommend</p>
          <p className="placeholder">
            "A game-changer for productivity! The features are so intuitive, it
            helped me streamline my daily tasks."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Jane Doe</p>
              <p className="author-title">CEO, Example.com</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p className="testimonial">Changed the way we work! Great features</p>
          <p className="placeholder">
            "Absolutely love this app! It has everything I need in one place,
            saving me so much time."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Sam Smith</p>
              <p className="author-title">Manager, TechCorp</p>
            </div>
          </div>
        </div>

        <div className="review-card" style={{ backgroundColor: "#f5f5f5" }}>
          <p className="testimonial">Life-changing tool! Saves so much time</p>
          <p className="placeholder">
            "This tool is amazing! It’s helped me stay organized and efficient
            in ways I didn’t think were possible."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Lisa Brown</p>
              <p className="author-title">Developer, CodeInc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <section className="integrations">
        <h2>All Link Apps and Integrations</h2>
        <div>
          <img src="/Images/Frame.png" alt="Frame" className="frameimg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-upper">
          <div className="footer-buttons">
            <button className="login-btn"onClick={() => navigate("/signin")}>Log in</button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>Sign up free</button>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>About Spark</h4>
              <ul>
                <li>Blog</li>
                <li>Press</li>
                <li>Social Good</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Careers</h4>
              <ul>
                <li>Getting Started</li>
                <li>Features and How-Tos</li>
                <li>FAQs</li>
                <li>Report a Violation</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Notice</li>
                <li>Trust Center</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present, and emerging.
          </p>

          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <a href="https://www.instagram.com/aditya_mohite_patil" target="_blank" rel="noopener noreferrer" style={{color:"#000000"}}>
  <i className="fab fa-instagram"></i>
</a>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fas fa-fire"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Entrypage;
