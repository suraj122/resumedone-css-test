import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="flex-start sm-flex-none">
        <li>
          <Link to="/terms-condition">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
