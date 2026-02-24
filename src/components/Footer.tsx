import Logo from "./Logo";
import {
  IoChatbubblesSharp as ChatIcon,
  IoCall as CallIcon,
  IoMail as MailIcon,
  IoLogoGithub as GithubIcon,
} from "react-icons/io5";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-(--color-black) text-(--color-white) p-4 flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-32">
      <section className="footer-section">
        <span className="footer-header">
          <Logo size="small" variant="dark" />
        </span>
        <span className="text-center md:text-start">
          This is not a real store. This is a demo React e-commerce front-end.
          Repository on{" "}
          <a
            href="https://github.com/Liam-JL/electronix-storefront-refactor"
            className="underline"
          >
            GitHub
          </a>
        </span>
      </section>

      <section className="footer-section">
        <h2 className="footer-header">Useful Links</h2>
        <ul>
          <li className="footer-link">
            <a href="#" title="Page under construction">
              Return Policy
            </a>
          </li>
          <li className="footer-link">
            <a href="#" title="Page under construction">
              Shipping Information
            </a>
          </li>
          <li className="footer-link">
            <a href="https://logoipsum.com/">Logoipsum</a>
          </li>
          <li className="footer-link">
            <a href="https://dummyjson.com/">DummyJSON</a>
          </li>
        </ul>
      </section>

      <section className="footer-section">
        <h2 className="footer-header">Contact Us</h2>
        <ul>
          <li className="footer-link">
            <MailIcon />
            <a href="mailto:someone@example.com">help@electronix.com</a>
          </li>
          <li className="footer-link">
            <CallIcon />
            <a href="tel:1234567">Call 123-4567</a>
          </li>
          <li className="footer-link">
            <ChatIcon />
            <Link to="/error">Chat With Us</Link>
          </li>
          <li className="footer-link">
            <GithubIcon />
            <a href="https://github.com/Liam-JL">Liam Lirson on GitHub</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
