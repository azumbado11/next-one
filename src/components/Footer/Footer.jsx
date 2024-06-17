import React from "react";
import Link from "next/link";
import "./Footer.css";
import { footerLinks, footerSocials } from "../../constants/index";

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer-columns__container">
        {footerLinks.map((link) => {
          return (
            <article key={link.title} className="footer__columns">
              <h4>{link.title}</h4>
              {link.links.map((i) => {
                return (
                  <Link href={i.url} key={i.title}>
                    {i.title}
                  </Link>
                );
              })}
            </article>
          );
        })}
        <section className="socials__container">
          {footerSocials.map((social) => {
            return (
              <Link href={social.url} key={social.id} className="socialpill">
                {social.icon}
              </Link>
            );
          })}
        </section>
      </section>
      <section className="footer__terms">
        <small>
          E-Commerce FullStack Project inspired by other famous shopping
          websites. 2024.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
/* <div className="footer__columns">A</div> */
/* <div className="socialpill">{Test}</div> */
