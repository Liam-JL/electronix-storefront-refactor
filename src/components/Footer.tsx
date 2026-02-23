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
    <div className="bg-(--color-black) text-(--color-white) p-4 flex flex-col gap-4">
      <section className="footer-section">
        <span className="flex justify-center">
          <Logo size="small" variant="dark" />
        </span>
        <span>
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
        <h2 className="flex justify-center">Useful Links</h2>
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
        <h2 className="flex justify-center">Contact Us</h2>
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
