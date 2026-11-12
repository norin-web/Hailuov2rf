import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <Link to="/" className="logo logo--lg">
            <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
            <span>{site.brand}</span>
          </Link>
          <p className="muted">Text to video in your pocket. Describe it, create it, keep it.</p>
          <Btn href={app.url}>Download on the App Store</Btn>
        </div>
        <div className="footer__cols">
          <div>
            <span className="footer__h">Product</span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/app">App</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <span className="footer__h">Help</span>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <span className="footer__h">Contact</span>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__stage" aria-hidden="true">
        <div className="footer__rays" />
        <div className="arc footer__arc" />
        <span className="footer__word">{site.brand}</span>
      </div>

      <div className="footer__copy">
        <span>© {site.year} {site.operator.replace(/\.?$/, ".")} {site.disclaimer}</span>
        <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </div>
    </footer>
  );
}
